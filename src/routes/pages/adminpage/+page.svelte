<script>

</script>
<style>
 thead {
    background-color: white;
    color: black;
    font-size: 15px;
 }
.one {
    color: black;
 }
</style>
<main class="w-full h-screen bg-cover bg-center" style="background-image: url('/bg.png');">
    <section>
        <div class="text-center font-bold text-3xl text-slate-950  w-full p-5 bg-slate-300 shadow-md shadow-white">
            ADMIN PAGE
        </div>
        <!--logout-->
        <div class=" float-right mt-5 right-2 h-10 w-10 z-50  "><box-icon class="h-10 w-10" name='log-in' color="#fff"></box-icon></div>
        <div class="w-full flex justify-center p-5 gap-2">
            <div class="w-1/2 bg-slate-200 p-5 bg-opacity-45 rounded-md border-2 border-white shadow-md shadow-sky-500   ">
                <div class="text-2xl font-bold shadow-md shadow-white text-slate-950 bg-slate-300 p-2 text-center rounded-md border border-black ">MANAGE BOOKINGS</div> 
                <div class="w-full bg-slate-900 shadow-md shadow-white p-2 mt-2 rounded-md border border-black  ">
                    <div class="overflow-x-auto">
                        <table class="table">
                          <!-- head -->
                          <thead>
                            <tr>
                              <th></th>
                              <th>Email</th>
                              <th>Date</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- row 1 -->
                            <tr>
                              <th>1</th>
                              <td>orosco@gmail.com</td>
                              <td>05/12/2025</td>
                              <td><button onclick="my_det.showModal()" class="px-2 text-white font-medium hover:bg-green-600 hover:scale-95 duration-150   " >DETAILS</button></td>
                            </tr>
                           
                          </tbody>
                        </table>
                      </div>
                   
                </div>
            </div>
            <dialog id="my_det" class="modal">
                <div class="modal-box">
                  <h3 class="font-bold text-2xl text-center bg-white text-slate-900 rounded-md ">CUSTOMER BOOKING INFO</h3>
                  <div class=" flex">
                    <div class=""><p class="py-4 mr-2">Email:</p></div>
                    <div class=""><p class="py-4 mr-2">orosco@gmail.com</p></div>
                  </div>
                  <div class=" flex">
                    <div class=""><p class="py-4 mr-2">Vehicle Type:</p></div>
                    <div class=""><p class="py-4 mr-2">Van</p></div>
                  </div>
                  <div class=" flex ">
                    <div class=""><p class="py-4 mr-2">Service:</p></div>
                    <div class=""><p class="py-4 mr-2">CARWASH, REPAINT</p></div>
                  </div>
                  <div class=" flex ">
                    <div class=""><p class="py-4 mr-2">Notes:</p></div>
                    <div class=""><p class="py-4 mr-2">oms</p></div>
                  </div>
                  <div class=" flex ">
                    <div class=""><p class="py-4 mr-2">Date:</p></div>
                    <div class=""><p class="py-4 mr-2">01/20/2020</p></div>
                  </div>
                  <div class="flex justify-between">
                    <button class="btn" >CANCEL BOOKING</button>
                    <button class="btn" >ACCOMODATE</button>
                </div>
                </div>
               
                <form method="dialog" class="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
            <div class="w-1/2 bg-slate-800 p-5 rounded-xl bg-opacity-95 border-2 border-white shadow-md shadow-sky-500  ">
                <div class="text-2xl font-bold text-white shadow-md shadow-white bg-slate-900 p-2 text-center rounded-md border border-black mb-3 flex justify-between"><div class="">MANAGE SERVICES</div><div onclick="my_det3.showModal()" class=""><box-icon name='edit-alt' color="#fff" class="hover:bg-slate-400 rounded-full"></box-icon></div> </div> 
                <div class="bg-white rounded-md p-2">
                    <div class="overflow-x-auto">
                        <table class="table">
                          <!-- head -->
                          <thead>
                            <tr>
                              
                              <th>Service Name</th>
                              <th>Price</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <!-- row 1 -->
                            <tr class="one">
                           
                              <td>Car wash</td>
                              <td>100</td>
                              <td><button onclick="my_det2.showModal()" class="px-2 text-black font-medium hover:bg-green-600 hover:scale-95 duration-150   " >DETAILS</button></td>
                            </tr>
                          
                          </tbody>
                        </table>
                      </div>
                </div>

                <dialog id="my_det3" class="modal">
                    <div class="modal-box">
                      <h3 class="font-bold text-lg text-center">ENTER NEW SERVICE?</h3>
                      <p class="">NAME:</p>
                      <input type="text" class="w-full p-2 mb-3">
                      <p class="">PRICE:</p>
                      <input type="number" class="w-full p-2">
                      <button class="btn justify-end float-right mt-2" >SUBMIT</button>
                    </div>
                    <form method="dialog" class="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
                <dialog id="my_det2" class="modal">
                    <div class="modal-box w-full">
                      <h3 class="font-bold text-2xl text-center bg-white text-slate-900 rounded-md ">MANAGE SERVICE</h3>
                      <div class=" flex">
                        <div class=""><p class="py-4 mr-2">Service Name:</p></div>
                        <div class=""><p class="py-4 mr-2">Carwash</p></div>
                      </div>
                      <div class=" flex w-full">
                        <div class=""><p class="py-4 mr-2">Price:</p></div>
                        <div class=""> <input type="text" class="p-2 w-full"> </div>
                      </div>
                      <div class="flex justify-between">
                        <button class="btn" >DELETE SERVICE</button>
                        <button class="btn" >UPDATE</button>
                    </div>
                    </div>
                   
                    <form method="dialog" class="modal-backdrop">
                      <button>close</button>
                    </form>
                  </dialog>
            </div>
        </div>
    </section>
</main>