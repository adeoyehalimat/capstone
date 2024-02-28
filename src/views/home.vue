<template >
    <h1> this is the home pages</h1>
    <div class="welcome" >
            <div class="welcome-image">
                <div class="welcome-note">
                    <div class="welcome-note1">
                        <h3 class="welcome-note01"> Welcome to Chatter: A Haven for Text-Based Content</h3>
                        <p class="welcome-note02"> Unleash the Power of Words, Connect with Like-minded Readers and Writers</p>
                    </div>
                <div class="get-started"> 
                    <button :style ="{backgroundColor: 'rgba(84, 62, 224, 1)', border: 'none',color:'rgba(255, 255, 255, 1)', height:'27px',top:'14.5px', left: '24px', position:'absolute', fontFamily: '\'DM Sans\', sans-serif', fontSize:'18px', fontWeight: '700', lineHeight: '27px', textAlign:'center',  }"> Get started </button>
                </div>
                </div>
            </div> 
        </div>

</template>

<script setup>
</script>
<style scoped>
.welcome{
    width: 1440px;
    height: 764px;
    top: 62px;
    padding: 216px, 228px, 216px, 228px;
    color: rgba(0, 0, 0, 0.55); 
    /* position: fixed;   */
}
.welcome-image{
    background-image: url('https://s3-alpha-sig.figma.com/img/b497/9175/01af3e27298b70fee1f8a10be764856b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EQHL6ajJmVP7wcIsNT12nz0ZR13xafOZN2tH8Ai2DjMntwRg0gcdz543MiCCtS2W48n1uesx91ukOfYT6kJByG2126L52H9E5CbVvoXyEhT4dZNsSAqW82PW09AVvb3IaKd8UeuZ9WucqCbNctymQ3RdlV-Fi-I2xf7RHrq7psxOHqDxhEMG6MYMW0l7PKT2i7~VYhJHG~3KQ~V5HYK32OC8bTt1expJFMA-yxZfvCYf8WiLFMAozy0DfFeHrIKVJKLP5f6bWq0VqZuHUHnnGMs02IBYue2brk8FQMsxua8vo6E5lXkmf~sV5Ed9m0tfDUfWFm2BTw77IhAnt6H0Pg__');
    width: 1440px;
    height: 765px;
    top: 99px;
    padding: 216px, 228px, 216px, 228px;
    background-repeat:no-repeat;
    background-position: center;
    background-size: cover;
    color: rgba(145, 135, 135, 0.55);
    position: absolute;
   

}
.welcome-note{
    width: 984px;
    height: 332px;
    top: 216px;
    left: 228px;
    padding: 0px, 0px, 74px, 0px;
    gap: 36px;
    position: relative;

}
.welcome-note1{
    width: 984px;
    height: 240px;
    gap: 24px;

}
.welcome-note01{
    width: 984px;
    height: 144px;
    font-family: 'DM Sans', sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);



}
.welcome-note02{
    width: 740px;
    height: 72px;
    font-family: DM Sans;
    font-size: 24px;
    font-weight: 500;
    line-height: 36px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);

}
.get-started{
    width: 157px;
    height: 56px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 8px;
    gap: 8px;
    margin-top: 30px;
    background-color: rgba(84, 62, 224, 1);
    position: absolute;

}

</style>