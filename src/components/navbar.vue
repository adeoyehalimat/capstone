<template>
            <div class="heading">
                <div class="chatter">
                     CHATTER
                </div>
                <div class="routes">
                    <div class="route1">
                    <router-link to="home" 
                    :style="{ height:'24px', width:'46px' ,  fontFamily: '\'DM Sans\', sans-serif', fontSize:'16px',fontWeight: '700',lineHeight: '24px',letterSpacing: '0em',textAlign: 'left',color:'rgba(0, 0, 0, 1)',
                    }"> Home</router-link>
                    <router-link to="about" 
                    :style="{height:'24px', width:'70px' , fontFamily: '\'DM Sans\', sans-serif', fontSize:'16px',fontWeight: '700',lineHeight: '24px',textAlign: 'left',color:'rgba(0, 0, 0, 1)',

                    }"> About us </router-link>
                    <router-link to="contact" :style="{height:'24px', width:'64px' , fontFamily: '\'DM Sans\', sans-serif', fontSize:'16px',fontWeight: '700',lineHeight: '24px',textAlign: 'left',color:'rgba(0, 0, 0, 1)', }"> Contact </router-link>
                    <router-link to="blogs" :style="{height:'24px', width:'41px' , fontFamily: '\'DM Sans\', sans-serif', fontSize:'16px',fontWeight: '700',lineHeight: '24px',textAlign: 'left',color:'rgba(0, 0, 0, 1)', }"> Blogs</router-link>
                    </div> 
                    <div class="route2"> 
                        <div class="login">
                            <router-link to="login"  :style= "{height:'27px', width:'51px' , fontFamily: '\'DM Sans\', sans-serif', fontSize:'18px', left: '50px', fontWeight: '700',lineHeight: '24px', color:'rgba(17, 17, 17, 1)', top: '13px',
                            position: 'relative' }"> Log in</router-link>
                        </div>
                        <div class="signup"> 
                            <router-link to="SignUp" :style= "{height:'27px', width:'64px' , fontFamily: '\'DM Sans\', sans-serif', fontSize:'18px', textAlign: 'center', fontWeight: '700',lineHeight: '27px', color: 'rgba(255, 255, 255, 1)',top: '13px',
                         position: 'relative', left: '46px' }" > sign up</router-link>
                         
                    </div>
                    
                </div>
                
            </div>
            
        </div>
        <div class="main-container">
        <div class="chatter" 
        :style="{ width: '214px',height: '72px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '48px',fontWeight: '700',lineHeight: '72px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(84, 62, 224, 1)', top: '72px', left: '80px', position: 'absolute'
        }">
            CHATTER
        </div>
        <div class="explore" :style="{display: 'flex', flexDirection: 'column', gap: '4px'}">
            <p :style="{ width: '85px',height: '36px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '60px', left: '512px', position: 'absolute'
        }"> Explore</p>
            <router-link to="/community" 
            :style="{ width: '95px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '124px', left: '512px', position: 'absolute'
            }"> community</router-link>
            <router-link to="/trending-blogs" 
            :style="{ width: '121px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '167px', left: '512px', position: 'absolute'
            }"> Trending blogs</router-link>
            <router-link to="/team-chatter" 
            :style="{ width: '148px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '210px', left: '512px', position: 'absolute'
            }"> Chatter for teams </router-link>
        </div>
        <div class="support" :style="{display: 'flex', flexDirection: 'column', gap: '4px'}">
            <p :style="{ width: '93px',height: '36px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '60px', left: '843px', position: 'absolute'
            }"> Support</p>
            <router-link to="/support-docs" 
            :style="{ width: '114px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '124px', left: '843px', position: 'absolute'
            }"> Support docs </router-link>
            <router-link to="/join-slack" 
            :style="{ width: '82px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '167px', left: '843px', position: 'absolute'
            }" > Join slack </router-link>
            <router-link to="/contact"
            :style="{ width: '68px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '210px', left: '844px', position: 'absolute'
            }"> Contact</router-link>
        </div>
        <div class="official-blog" :style="{display: 'flex', flexDirection: 'column', gap: '4px'}">
            <p :style="{ width: '135px',height: '36px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '60px', left: '1184px', position: 'absolute'
            }"> Official blog</p>
            <router-link to="/official-blog" 
            :style="{ width: '99px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '124px', left: '1184px', position: 'absolute'
            }"> Official blog </router-link>
            <router-link to="/engineering-blog" 
            :style="{ width: '137px',height: '27px',fontFamily: '\'DM Sans\', sans-serif',fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',color: 'rgba(17, 17, 17, 1)', top: '167px', left: '1184px', position: 'absolute'
            }"> Engineering blog </router-link>
            
           
        </div>
        
    </div>


</template>
<script setup>
</script>
<style scoped>
.heading{
    display:flex;
    flex-direction: row;
    width: 1440px;
    height: 98px;
    padding: 13px, 110px, 13px, 72px;
    border: 1px solid rgba(208, 208, 208, 1);
    /* position: fixed; */
}
.chatter{
    width: 214px;
    height: 72px;
    top: 13px;
    left: 72px;
    position: relative;
    font-family: 'DM Sans', sans-serif;
    font-size: 48px;
    font-weight: 700;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(84, 62, 224, 1);
}
.routes{
    width:   805px;
    height:  56px;
    top: 25px;
    left: 318px;
    gap: 174px;
    position: relative;
    display:flex;
    flex-direction: row;

     

}
.route1{
    width: 293px;
    height: 24px;
    gap: 24px;
    display:flex;
    flex-direction: row;
    top: 13px;
    position: relative;

}
.route2{
    width: 338px;
    height: 56px;
    gap: 24px;
    display:flex;
    flex-direction: row;

}
.login{
     height: 56px;
     width: 157px;
     font-family: 'DM Sans', sans-serif;
     font-size: 16px;
     font-weight: 700;
     line-height: 24px;
     padding: 8px, 16px, 8px, 16px;
     border-radius: 8px;
     border: 1px solid rgba(84, 62, 224, 1);
     gap: 8px;
     
    }

.signup{
    width: 157px;
    height: 56px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 8px;
    gap: 8px;
    background-color: rgba(84, 62, 224, 1);
}
.main-container{
    width: 1440px;
    height: 402px;
    top: 3217px;
    background: rgba(255, 237, 204, 0.5);
    position: absolute;
    display: flex;
    flex-direction: row;
}
</style>