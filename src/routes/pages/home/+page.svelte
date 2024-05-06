<script>
  import Footerhome from "../../../components/footerhome.svelte";
  import Mainbody from "../../../components/mainbody.svelte";
  import Chatbubble from "../../../components/chatbubble.svelte";
  import Footer from "../../../components/footer.svelte";


</script>
<style>
  h1{
    filter: drop-shadow(0 0 5px  rgb(254, 254, 254));
  }
  p{
    filter: drop-shadow(0 0 5px  rgba(254, 254, 254, 0.845));
  }
  table {
    background-color: rgba(0, 40, 241, 0.318);
    
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  
  td{
    color: black;
  }
  td {
    color: black;
  }
  thead {
    background: #000;
    color: white;
  }
</style>
<main class="w-full h-screen bg-cover bg-center" style="background-image: url('/bg.png');">
  <section class="body z-10">
    <div class="h-screen">
      <img src="/logo.png" alt="" class=" w-36 mx-auto pt-10 " >
      <!--logout-->
      <div class="absolute -mt-40 right-2 h-10 w-10  "><box-icon class="h-10 w-10" name='log-in' color="#fff"></box-icon></div>
      <h1 class="text-center text-white pt-10 text-5xl font-bold">Online Car Maintenance <br>
        Scheduling</h1>
      <p class="text-2xl text-center pt-10 text-white">Effortlessly schedule your car maintenance online <br> and get instant  repair cost estimates. <br> 
        Take the hassle out of car care and keep your vehicle in top condition.</p>

        <div class="w-1/2 p-10 justify-center flex mx-auto mt-10 w-full">
          <div class="mx-auto justify-center flex " >   
            <a href="#" onclick="my_modal_2.showModal()" class="py-3 px-10 bg-[#fafefe6a] rounded-lg border-2 border-black  text-black font-bold hover:bg-slate-200 duration-150 ">SCHEDULE NOW</a>
          </div>
          <div class="mx-auto justify-center flex " >
            <a href="#" onclick="my_modal_3.showModal()" class="py-3 px-10 bg-[#16fffff9] rounded-lg border-2 border-black  text-black font-bold hover:bg-slate-200 duration-150 ">RESERVATION</a>
          </div>
        </div>
        <dialog id="my_modal_3" class="modal">
          <div class="modal-box bg-white p-2  ">
            <h3 class="font-bold text-4xl text-black text-center pb-2 ">RESERVATION</h3>
            <div class="w-full border">
              <div class="overflow-x-auto">
                <table class="table rounded-lg ">
                  <!-- head -->
                  <thead>
                    <tr>
                      <th></th>
                      <th>CAR</th>
                      <th>RESERVATION DATE</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <!-- row 1 -->
                    <tr>
                      <th>1</th>
                      <td>Cy Ganderton</td>
                      <td>Quality Control Specialist</td>
                      <td> <button class="btn p-1 bg-slate-300 text-black  hover:bg-red-600" >CANCEL</button> </td>
                    </tr>
                  
                 

                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <form method="dialog" class="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
        
        <dialog id="my_modal_2" class="modal">
          <div class="modal-box bg-white  ">
            <h3 class="font-bold text-4xl text-black text-center pb-5  ">CAR INFORMATION</h3>
            <p class="py-2 text-center text-slate-100 font-bold bg-slate-900 mb-2 rounded-md ">SELECT VEHICLE TYPE</p>
            <div class="mx-auto mb-3">
              <div class="form-check justify-center  flex align-middle gap-5 text-black font-medium">
                <input type="radio" name="radio-1" class="radio border-black border-2 " checked /> CAR
                <input type="radio" name="radio-1" class="radio border-black border-2 " />Motorcycle
                <input type="radio" name="radio-1" class="radio border-black border-2 " />Van
              </div>
              
            </div>
            <p class="py-2 text-center text-slate-100 font-bold bg-slate-900 mb-2 rounded-md ">TYPE OF SERVICE <span class="text-sm font-normal text-slate-300 " > (select the service you want) </span> </p>
            <div class="mx-auto justify-center">
              <div class="flex gap-2 m-2">
                <input type="checkbox" class="checkbox bg-slate-200 border border-black " /> <p class=" text-sm text-slate-950 ">BATTERY MAINTENANCE</p> <p class=" text-sm text-slate-950  font-medium">PRICE : 2245</p>
              </div>
              <div class="flex gap-2 m-2">
                <input type="checkbox" class="checkbox bg-slate-200 border border-black " /><p class=" text-sm text-slate-950 ">ENGINE OIL</p><p class=" text-sm text-slate-950 font-medium ">PRICE : 4115</p>
              </div>
              <div class="flex gap-2 m-2">
                <input type="checkbox" class="checkbox bg-slate-200 border border-black " /><p class=" text-sm text-slate-950 ">CHANGE TIRES</p> <p class=" text-sm text-slate-950 font-medium ">PRICE : 345</p>
              </div>
              <div class="flex gap-2 m-2">
                <input type="checkbox" class="checkbox bg-slate-200 border border-black " /><p class=" text-sm text-slate-950 ">COOLANT FLUID EXCHANGE</p><p class=" text-sm text-slate-950 font-medium ">PRICE : 450</p>
              </div>
              <div class="flex gap-2 m-2">
                <input type="checkbox" class="checkbox bg-slate-200 border border-black " /><p class=" text-sm text-slate-950 ">CARWASH</p><p class=" text-sm text-slate-950  font-medium">PRICE : 50</p>
              </div>
        
 
             
              
            </div>
            <br>
            <p class="py-2 text-center text-slate-100 font-bold bg-slate-900 mb-2 rounded-md ">NOTES</p>
            <div class="mx-auto mb-3">
                <textarea placeholder="Type your notes here" name="" id="" class="bg-slate-300 w-full text-slate-800 p-2 rounded-xl h-20 mt-2" ></textarea>   
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
    
        
        <Footer></Footer>
    </div>
   
  </section>
</main>


