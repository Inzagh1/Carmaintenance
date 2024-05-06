<script>
  import { goto } from '$app/navigation';
  import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { db } from '$lib/firebase';
  import firebase from 'firebase/compat/app';
  import { getDatabase, ref, orderByChild, equalTo, get } from 'firebase/database';
  import { addDoc, collection, getFirestore } from 'firebase/firestore';


  

  let email = '';
  let password = '';

  async function loginUser() {
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Handle successful login
      console.log('User logged in:', user);
      window.location.href = '/pages/adminpage';
    } catch (error) {
      // Handle errors
      // @ts-ignore
      console.error('Error logging in:', error.message);
      alert("Invalid credentials")
    }
  }

  let username2 = '';
  let email2 = '';
  let password2 = '';
  let conpassword2 = '';

  async function signUpUser() {
    try {
    if (password2.length < 6) {
      alert('Passwords should be at least 6 characters long');
      return;
    }

    if (password2 !== conpassword2) {
      alert('Passwords do not match');
      return;
    }
    
    
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email2, password2);
    const user = userCredential.user;


    const db = getFirestore();
    const usersCollection = collection(db, 'users');
    const newUserDoc = await addDoc(usersCollection, {
      username: username2,
      email: email2,
      role: "customer"
    });
  
    console.log('User signed up:', user);
    console.log('User document added to Firestore with ID:', newUserDoc.id);
    window.location.href = '/pages/home';
  
  } catch (error) {
     // @ts-ignore
    console.error('Error signing up:', error.message);
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
  
  <form on:submit|preventDefault={loginUser} class="md:h-[80vh] md:w-[32vw] md:ml-10 lg:h-[70vh] h-[60vh] w-[80vw] bg-opacity-40  bg-[#fefefe] border-white  border-2 rounded-md ">
    <h1 class="md:text-[45px] text-[30px] mb-2 mt-5 text-slate-900 font-bold text-center md:mt-10 md:mb-8">LOGIN</h1>
    <div class="md:pl-9 md:pr-9 p-5">
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 md:h-14 text-black border-slate-500 ">
        <input type="email" bind:value={email} class="grow bg-slate-100 text-black " placeholder="Email" required />
      </label>
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-7 md:h-14 text-black border-slate-500 ">
        <input type="password" bind:value={password} class="grow " placeholder="Password" required />
      </label>
      <p class="text-slate-800 float-end mt-4 font-medium text-[12px] md:text-[15px]">Forgot password?</p>
      
      <button type="submit" class="btn  mt-5 w-[100%] text-[18px]">ENTER</button>
    </div>
  
    <div class="text-center ">
      <p class=" text-black font-medium text-center text-[15px]">Don't have an account? <button on:click={() => toggleForm(2)} class=" text-black hover:text-blue-900 hover:font-bold font-bold rounded-md hover:text-[#005CED] ">Register</button> </p>
    </div>
  </form>







  {:else if showForm2}
  <form on:submit|preventDefault={signUpUser} class="md:h-[80vh] h-[73vh] mt-[-30px] md:mt-[-20px] md:w-[32vw] md:ml-10 lg:h-[75vh]  w-[80vw] bg-opacity-40 bg-[#fefefe] border-white  border-2 rounded-md ">
    <h1 class="md:text-[45px] text-[30px] mb-1 mt-2 text-slate-900 font-bold text-center  lg:m-5  ">REGISTER</h1>
    <div class="md:pl-9 md:pr-9 p-3">
      <label class="input input-bordered rpoun flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15  md:h-14 text-black border-slate-500 ">
        <input type="text" bind:value={username2} class="grow bg-slate-100 text-black " placeholder="Username" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input type="email" bind:value={email2} class="grow bg-slate-100 text-black " placeholder="Email" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input type="password" bind:value={password2} class="grow " placeholder="Password" required />
      </label>
      
      <label class="input input-bordered flex items-center gap-2 border border-white bg-slate-200 bg-opacity-15 mt-4 md:h-14 text-black border-slate-500 ">
        <input  bind:value={conpassword2} type="password" class="grow " placeholder="Confirm Password" required />
      </label>  
      
      <p class="text-slate-800 float-end mt-2 font-medium text-[12px] md:text-[15px]">Forgot password?</p>
      
      <button type="submit" class="btn  mt-2 w-[100%] text-[18px]">SUBMIT</button>
    </div>
  
    <div class="text-center ">
      <p class=" text-black font-medium text-center text-[15px]">Have an account? <button on:click={() => toggleForm(1)} class=" text-black hover:text-blue-900 hover:font-bold font-bold rounded-md hover:text-[#005CED] ">Login</button> </p>
    </div>
  </form>




    
  {/if}
