<script>
    import '../components/login.svelte';
    import Login from '../components/login.svelte';
    import Footer from '../components/footer.svelte';
    import Mainbody from '../components/mainbody.svelte';


    let imageUrl = 'static\background.png';
</script>
    
<style>
    img {
        filter: drop-shadow(0 0 5px  rgba(255, 255, 255, 0.976));
    }
    h1 {
        filter: drop-shadow(0 0 5px  rgb(248, 248, 248));
    }
</style>

<div class=" flex flex-wrap sm:flex-col md:flex-row lg:flex-row ">
    <Mainbody>
        <div class="w-full h-screen bg-cover bg-center" style="background-image: url('/bg.png');" >
            <div class="justify-center md:flex lg:pt-[5%]  ">
                <div class="lg:pt-[10%] text-black flex md:row lg:pl-16 lg:w-1/2 md: w-screen md:pt-9 pt-5 p-10 ">
                    <div class="">
                        <img src="/logo.png" alt="logo" srcset="" class="w-20 m-2 md:ml-14 shadow-text-white drop-shadow-lg">
                    </div>
                    <div class="md:m-32 md:mt-[45%]  md:l-[-10px] lg:ml-[-80px] lg:mt-[17%]   ">
                     
                        <h1 class="text-[25px] font-bold text-slate-950 
                        md:text-[35px] 
                        lg:text-[60px]">CAT KAWAI</h1>
                        <h1 class="text-[11px] font-medium  text-slate-950
                         md:text-[25px] 
                         lg:text-[25px]">Car Maintenance Company</h1>
                    </div>
                </div>
                
                <div class=" w-full  lg:w-1/2 md:pt-14 ">
                       <center> <Login/></center>
                </div>
            </div>
        </div>
    </Mainbody>
  
 
 

    

</div>