<script>
  import Footerhome from "../../../components/footerhome.svelte";
  import Mainbody from "../../../components/mainbody.svelte";
  import Chatbubble from "../../../components/chatbubble.svelte";


</script>
<style>
  h1{
    filter: drop-shadow(0 0 5px  rgb(254, 254, 254));
  }
  p{
    filter: drop-shadow(0 0 5px  rgba(254, 254, 254, 0.845));
  }
</style>
<main class="w-full h-screen bg-cover bg-center" style="background-image: url('/bg.png');">
  <section class="body z-10">
    <div class="h-screen">
      <img src="/logo.png" alt="" class=" w-36 mx-auto pt-10 " >
      <h1 class="text-center text-white pt-10 text-5xl font-bold">Online Car Maintenance <br>
        Scheduling</h1>
      <p class="text-2xl text-center pt-10 text-white">Effortlessly schedule your car maintenance online <br> and get instant  repair cost estimates. <br> 
        Take the hassle out of car care and keep your vehicle in top condition.</p>

        <div class="w-1/2 p-10 justify-center mx-auto mt-10 w-full">
          <div class="mx-auto justify-center flex " >
            
            <a href="#" onclick="my_modal_2.showModal()" class="py-3 px-10 bg-[#fafefe6a] rounded-lg border-2 border-black  text-black font-bold hover:bg-slate-200 duration-150 ">SCHEDULE NOW</a>
          </div>
        </div>

        <dialog id="my_modal_2" class="modal">
          <div class="modal-box bg-white  ">
            <h3 class="font-bold text-4xl text-black text-center  ">CAR INFORMATION</h3>
            <p class="py-4 text-center text-slate-950 font-bold ">SELECT VEHICLE TYPE</p>
            <div class="mx-auto">
              <div class="form-check justify-center  flex align-middle gap-5 text-black font-medium">
                <input type="radio" name="radio-1" class="radio border-black border-2 " checked /> CAR
                <input type="radio" name="radio-1" class="radio border-black border-2 " />Motorcycle
                <input type="radio" name="radio-1" class="radio border-black border-2 " />Van
              </div>
              
            </div>
            <p class="py-4 text-center text-slate-950 font-bold ">CAR ISSUE</p>
            <div class="mx-auto">
                <div class="text-slate-950 font-medium ">Type your issue here:</div>
                <textarea name="" id="" class="bg-slate-300 w-full text-slate-800 p-2 rounded-xl h-20 mt-2" ></textarea>   
            </div>
            <div class="">
              <div class="text-slate-950 font-medium mt-5 ">Set Date:</div>
              <input class="w-full h-10 rounded-md border border-black bg-slate-300 mt-2 text-black" type="date" id="birthday" name="birthday">
            </div>
            <div class="justify-end flex ">
              <button class="py-2 px-10 bg-slate-300 text-black font-semibold border-black hover:bg-slate-950 hover:text-white  duration-300 hover:scale-95   border mt-2 rounded-md">SUBMIT</button>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
    </div>
  </section>
</main>


