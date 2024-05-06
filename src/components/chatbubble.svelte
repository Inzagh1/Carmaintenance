<script>
  let ordermessage = false;
  let cancelmessage = false;
  let deliverymessage = false;

  
  function order() {
    ordermessage = true;
    cancelmessage = false;
    deliverymessage = false;
  }
  function cancel() {
    cancelmessage = true;
    ordermessage = false;
    deliverymessage = false;
  }
  function delivery() {
    deliverymessage = true;
    cancelmessage = false;
    ordermessage = false;
  }

  
</script>
<style>
  .message {
  overflow-y: auto;
  }
  .message::-webkit-scrollbar {
    width: 0px;
  }
  ::placeholder {
    color: rgb(36, 36, 36); 
  }

</style>
<div class="right-0  sticky ">
    <div class="dropdown dropdown-top dropdown-end">
      
        <div tabindex="0" role="button" class="btn m-1 bg-green-700 border-none shadow-md shadow-[#11b70ed0] ">
          <box-icon class="fill-white" 
          name='message-alt-dots' ></box-icon>
        </div>

        <div tabindex="0" class="  dropdown-content z-[1] menu p-2 shadow bg-green-900 rounded-lg w-[345px] h-[450px] p-2">
          <div class="duration-200 message h-[400px] bg-slate-300 rounded-md pb-20 overflow-y-auto   overflow-hidden    ">
            <div class="">
                <div class="h-10  bg-slate-900 w-auto text-center p-2 sticky top-0 z-50  ">
                  <span class="text-slate-100 text-[15px]  "> Message Us </span>
                </div>

                <!--Janie response-->
                <div class="chat chat-start">   
                  <div class="chat-bubble bg-green-950 text-[13px] ">"Hey there! 👋 Have a question or need assistance?
                    We're here to help! Feel free to drop us a message anytime.
                      We love hearing from you! 💌"
                  </div>
                </div>

              {#if ordermessage}
              <div class="chat chat-end">
                <div class="chat-bubble">How to order?</div>
              </div>

              <div class="chat chat-start">   
                <div class="chat-bubble bg-green-950 ">
                  <div class="w-[250px]  ">
                    <div class="">
                          <span class="text-[13px] font-bold">Order Guide:</span><br/>
                          <span class="text-[13px]">To start your order journey, 
                            simply head over to our <button class="font-medium hover:text-yellow-500   ">Shop page.</button>  From there, you'll
                            have the delightful choice between bringing your dream 
                            design to life or selecting from our fabulous preset
                            templates.
                          <br/>
                          <br/>
                          <span class="text-[13px] font-semibold ">Order Process:</span><br/>
                          <span class="text-[13px] font-medium ">In Preview Preset</span> <br/>
                           - Select your background color. <br/>
                           - Select your pattern. <br/>
                           - Select your font design. <br/>
                           - Select a shape for your Logo. <br/>
                           - Lastly, when you're ready, simply 
                           click the "Order Now" button. From there, 
                           you can add your images and even include a description. 
                           We're here to bring your dream design to life, so feel 
                           free to share your suggestions with us!
                           <br/>
                           <br/>
                           <span class="text-[13px] font-medium">In Preset Templates:</span> <br/>
                           
                           - First, select the design that best matches your desires.<br/>
                           - Once you've found the perfect fit, simply click the "Order Now" button.<br/>
                           - From there, you can add your images and even include a description.
                           We're here to turn your dream design into a reality, so don't hesitate to share your ideas with us!<br/>
                           <br/>
                           Let's work together to make some magic happen! 😊🎨
                           
                        </span>
                    </div>
                  </div>           
                </div>    
               </div>
               {/if}

               {#if cancelmessage}
             
               <div class="chat chat-end">
                <div class="chat-bubble">How to cancel?</div>
              </div>

              <div class="chat chat-start">   
                <div class="chat-bubble bg-green-950 ">
                  <div class="w-[250px]  ">
                    <div class="w-full">
                        <span class="text-[13px] font-bold">Cancellation Guide:</span><br/>
                        
                        <span class="text-[13px]"> 
                          <span class="text-[13px] font-medium ">Rules for cancellation</span><br/>
                          
                          - If your order status shows as <span class="font-medium">"Order processing,"</span>
                            it means we're already hard at work bringing your creation to life! Unfortunately, 
                            this means it's not possible to cancel at this stage, as we've already begun using
                            the necessary materials. <br/>
                            However, if you've accidentally placed an order and need assistance, 
                            simply reach out to us via this message box. Your satisfaction is our 
                            priority, so please don't hesitate to share your concerns. <br/><br/>
                          <span class="text-[13px] font-medium ">Process:</span><br/>
                           - Go to <button class="font-medium hover:text-yellow-600"> Order page </button> <br/>
                           - See if the status is to confirm.<br/>
                           - Click the cancel button.<br/>
                           - And that's it. <br/>
                           <br/>
                             Happy surfing, and we're here to help make your experience as smooth as possible! 😊🎨
                        </span>
                    </div>
                  </div>                    
                </div>    
               </div>
      
               {/if}

               {#if deliverymessage}
               <div class="chat chat-end">
                <div class="chat-bubble">When is the delivery?</div>
              </div>

              <div class="chat chat-start">   
                <div class="chat-bubble bg-green-950 ">
                  <div class="w-[250px]  ">
                    <div class="w-full">
                        <span class="text-[13px] font-bold">Delivery Guide:</span><br/>
                        <span class="text-[13px]"> 
                          
                          <span class="text-[13px] font-medium ">Delivery Process:</span> <br/>
                          <span class="text-[13px] font-medium "> How to know if my orders is to deliver? </span><br/> - If you check the <button class="font-medium hover:text-yellow-600">Order page</button> and see that the status is <span class="font-medium">"To Deliver,"</span> it means our team is already busy processing your order to ship it out.
                          <br/> 
                          <span class="text-[13px] font-medium "> How long will it take? </span><br/> - Well, if you're in Quezon City, you can expect your orders to arrive within 1-3 days. If you're outside Quezon City, it might take a bit longer, typically around 3-5 days for delivery.
                          <br/>
                          <br/>
                          Our team will deliver your orders right 
                          to your selected address with a smile! We're here to make
                          sure you receive your items hassle-free and with the utmost care.
                          If you have any special delivery instructions or preferences,
                          feel free to let us know. We're committed to making your 
                          experience delightful from start to finish!
                          Rest assured, we're working hard to get your goodies to you as swiftly as possible! 🚚✨
    
                        </span>
                    </div>
                  </div>                      
                </div>    
               </div>
               {/if}        
          </div>

            <div class="bottom-2 absolute w-[95.5%]   ">
              <div class="flex-col text-center p-1 bg-slate-900">
                <button on:click={order} class="w-[100px] bg-slate-300 rounded-md p-[0.5px] text-slate-800 text-[13px] font-medium hover:bg-slate-700 hover:text-slate-300 ">How to order?</button>
                <button on:click={cancel}  class="w-[100px] bg-slate-300 rounded-md p-[0.5px] text-slate-800 text-[13px] font-medium hover:bg-slate-700 hover:text-slate-300">Cancel order?</button>
                <button on:click={delivery}  class="w-[100px] bg-slate-300 rounded-md p-[0.5px] text-slate-800 text-[13px] font-medium hover:bg-slate-700 hover:text-slate-300">When receive? </button>
              </div>
              <label class="input rounded-bl-md rounded-br-md  flex items-center gap-2 bg-slate-300 rounded-none border border-slate-500 ">
                <input type="text" class="grow text-black text-[13px]" placeholder="Type a message..." />
                <button class="pt-2"><box-icon name='send' type='solid' ></box-icon></button>
            </div>

            </div>
           
        </div>

       
      </div>
</div>  