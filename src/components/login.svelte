<script>
import { goto } from "$app/navigation";
import { db } from "$lib/firebase";
import { getDatabase, ref, get, child, set } from "firebase/database";


let email = '';
let password = '';
let errorMessage = '';

  /**
   * @param {{ preventDefault: () => void; }} event
   */
async function handleLogin(event) {
    event.preventDefault();

    try {
      const usersRef = ref(db, 'customers');
      const snapshot = await get(usersRef);

      let foundUser = null;

      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.email === email && userData.password === password) {
          foundUser = userData;
        }
      });

      if (foundUser) {
        // @ts-ignore
        if (foundUser.role === 'admin') {
          console.log('Admin signed in');
          window.location.href = '/pages/adminpage';
        // @ts-ignore
        } else if (foundUser.role === 'customer') {
          console.log('Customer signed in');
          window.location.href = '/pages/home';
        }
      } else {
        console.error('Invalid email or password');
        alert('Invalid email or password');
        return;
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  }

  let username2 = '';
  let email2 = '';
  let password2 = '';
  let confirmPassword2 = '';

  /**
   * @param {{ preventDefault: () => void; }} event
   */
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      if (!username2 || !email2 || !password2 || !confirmPassword2) {
        console.error('All fields are required.');
        alert('All fields are required.');
        return;
      }

      if (password2 !== confirmPassword2) {
        console.error('Passwords do not match.');
        alert('Passwords do not match.');
        return;
      }

      const usersRef = ref(db, 'customers');
      const snapshot = await get(usersRef);

      // Check if the email already exists
      let emailExists = false;
      snapshot.forEach((childSnapshot) => {
        const userData = childSnapshot.val();
        if (userData.email === email2) {
          emailExists = true;
        }
      });

      if (emailExists) {
        console.error('Email already exists.');
        alert('Email already exists.')
        return;
      }

      // If email does not exist, create a new user
      const lastUserId = await getLastUserId(); 
      const newUserId = lastUserId + 1;
      set(ref(db, 'customers/' + newUserId), {
        email: email2,
        password: password2,
        username: username2,
        role: "customer"
      });
      window.location.href = '/pages/home';
      console.log('User signed up:', email2);

    } catch (error) {
      console.error('Sign up error:', error);
    }
  }

  async function getLastUserId() {
    try {
        const response = await get(ref(db, 'customers'));
        if (!response.exists()) {
            return 0; 
        }
        const userData = response.val();
        const userIds = Object.keys(userData);
        if (userIds.length === 0) {
            return 0; 
        }
        const lastUserId = Math.max(...userIds.map(id => parseInt(id)));
        return lastUserId;
    } catch (error) {
        console.error('Error fetching last user ID:', error);
        throw error;
    }
}
  function gotoHome () {
    goto('/pages/home')
  }

    let showForm1 = true;
    let showForm2 = false;
  
    // @ts-ignore
    function toggleForm(form) {
      if (form === 1) {
        showForm1 = true;
        showForm2 = false;
      } else if (form === 2) {
        showForm1 = false;
        showForm2 = true;
      }
    }
</script>

<style>
  form {
    box-shadow: rgba(202, 202, 202, 0.633) 5px 5px 10px 1px;
    
  }
  ::placeholder{
    color:white;
  }
</style>

<!--MAIN BODY-->

  {#if showForm1}
  
  <form on:submit={handleLogin} class="md:h-[80vh] md:w-[32vw] md:ml-10 lg:h-[70vh] h-[60vh] w-[80vw] bg-opacity-40 bg-[#fefefe] border-white border-2 rounded-md ">
    <h1 class="md:text-[45px] text-[30px] mb-2 mt-5 text-slate-900 font-bold text-center md:mt-10 md:mb-8">LOGIN</h1>
    <div class="md:pl-9 md:pr-9 p-5">
        <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 md:h-14 text-black border-slate-500 ">
            <input type="email" bind:value={email} class="grow bg-slate-100 text-black " placeholder="Email" required />
        </label>
        <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-7 md:h-14 text-black border-slate-500 ">
            <input type="password" bind:value={password} class="grow " placeholder="Password" required />
        </label>
        <p class="text-slate-800 float-end mt-4 font-medium text-[12px] md:text-[15px]">Forgot password?</p>
      
        <button type="submit" class="btn mt-5 w-[100%] text-[18px]">ENTER</button>
    </div>
 
    <div class="text-center ">
        <p class="text-black font-medium text-center text-[15px]">Don't have an account? <button on:click={() => toggleForm(2)} class="text-black hover:text-blue-900 hover:font-bold font-bold rounded-md hover:text-[#005CED] ">Register</button> </p>
    </div>
  </form>








  {:else if showForm2}
  <form  on:submit={handleSubmit} class="md:h-[80vh] h-[73vh] mt-[-30px] md:mt-[-20px] md:w-[32vw] md:ml-10 lg:h-[75vh]  w-[80vw] bg-opacity-40 bg-[#fefefe] border-white  border-2 rounded-md ">
    <h1 class="md:text-[45px] text-[30px] mb-1 mt-2 text-slate-900 font-bold text-center  lg:m-5  ">REGISTER</h1>
    <div class="md:pl-9 md:pr-9 p-3">
      <label class="input input-bordered rpoun flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15  md:h-14 text-black border-slate-500 ">
        <input bind:value={username2} type="text"  class="grow bg-slate-100 text-black " placeholder="Username" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input bind:value={email2} type="email"  class="grow bg-slate-100 text-black " placeholder="Email" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input  bind:value={password2} type="password" class="grow " placeholder="Password" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input bind:value={confirmPassword2} type="password" class="grow " placeholder="Confirm Password" required />
      </label>  
      
      <p class="text-slate-800 float-end mt-2 font-medium text-[12px] md:text-[15px]">Forgot password?</p>
      
      <button type="submit" class="btn  mt-2 w-[100%] text-[18px]">SUBMIT</button>
    </div>
  
    <div class="text-center ">
      <p class=" text-black font-medium text-center text-[15px]">Have an account? <button on:click={() => toggleForm(1)} class=" text-black hover:text-blue-900 hover:font-bold font-bold rounded-md hover:text-[#005CED] ">Login</button> </p>
    </div>
  </form>




    
  {/if}
