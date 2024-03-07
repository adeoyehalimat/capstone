<template>
    <div class="parent" :style="{width: '1440px',height: '941px', backgroundColor: 'rgba(255, 255,255,1)', display: 'flex', flexDirection: 'row', top:'150px', position: 'absolute'}">
        <div :style="{width: '268pxpx',height: '941px', border: '1px solid rgba(208,208,208,1)'}">
            <div :style="{width: '140px',height: '48px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '48px',fontWeight: '500',lineHeight: '72px',letterSpacing: '0em',textAlign: 'center',left: '72px', top:'10px', position: 'absolute', color: 'rgba(84,62,224,1)'}" > CHATTER </div>
            <div :style="{width: '77px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',left: '73px', top:'82px', position: 'absolute', color: 'rgba(17,17,17,1)'}"> Overview </div>
            <div :style="{width: '174px',height: '258px',textAlign: 'center',left: '89px', top:'133px', position: 'absolute', gap:'12px', display: 'flex', flexDirection: 'column'}">
                <div :style="{width: '174px',height: '204px', gap:'12px'}" >
                    <div :style="{width: '170px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'column'}">
                        <div></div>
                        <div :style="{width: '37px',height: '24px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(84,62,224,1)'}"> Feed </div>
                    </div>
                    <div :style="{width: '174px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'column'}">
                        <div></div>
                        <div :style="{width: '81px',height: '24px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Bookmarks </div>
                    </div>
                    <div :style="{width: '174px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'column'}">
                        <div></div>
                        <div :style="{width: '84px',height: '24px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Team blogs </div>
                    </div>
                    <div :style="{width: '174px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'column'}">
                        <div></div>
                        <div :style="{width: '46px',height: '24px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Drafts </div>
                    </div>
                </div>
                    <div :style="{width: '167px',height: '42px', gap:'12px'}">
                        <div></div>
                        <div :style="{width: '69px',height: '24px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Analytics </div>
                        
                    </div>  
            
            </div>
            <div :style="{width: '179px',height: '41px',textAlign: 'center',left: '72px', top:'415px', position: 'absolute', gap:'12px'}">
                <div :style="{width: '114px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(17,17,17,1)'}"> Trending Tags </div>
                <div></div>
            </div>
            <div :style="{width: '174px',height: '183px',textAlign: 'center',left: '90px', top:'468px', position: 'absolute', gap:'12px', display: 'flex', flexDirection: 'column'}">
                <div :style="{width: '110px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Programming </div>
                <div :style="{width: '109px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Data science </div>
                <div :style="{width: '95px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Technology </div>
                <div :style="{width: '141px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Machine learning </div>
                <div :style="{width: '60px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Politics </div>
            </div>
            <div :style="{width: '64px',height: '27px',left: '89px', top:'664px', position: 'absolute',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',  color: 'rgba(17,17,17,1)'}"> See all </div>
            <div :style="{width: '71px',height: '27px',left: '73px', top:'715px', position: 'absolute',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'left',  color: 'rgba(17,17,17,1)'}"> Personal </div>
            <div :style="{width: '142px',height: '96px',textAlign: 'center',left: '88px', top:'754px', position: 'absolute', gap:'12px', display: 'flex', flexDirection: 'column'}">
                <div :style="{width: '136px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'row'}">
                    <div :style="{width: '107px',height: '27px', gap:'12px',}">
                        <div></div>
                        <div :style="{width: '71px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Account </div>
                    </div>
                    
                </div>
                <div :style="{width: '142px',height: '42px', gap:'12px', display: 'flex', flexDirection: 'row'}">
                    <div></div>
                    <div :style="{width: '106px',height: '27px',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center',  color: 'rgba(98,98,98,1)'}"> Notifications </div>
                </div>
            </div>
            <button :style="{width: '106px',height: '27px',border: 'none',textAlign: 'center',left: '91px', top:'874px', position: 'absolute',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em', color:'rgba(255,20,0,1)' }"> Log out </button>
        </div>
        <div :style="{display: 'flex', flexDirection:'column', left:' 268px', position: 'absolute',}">
            <div :style="{width: '1171px',height: '66px', gap:'12px', border: '1px solid rgba(208,208,208,1)', left:' 268px', position: 'absolute', display: 'flex', flexDirection: 'row'}">
                <div :style="{width: '84px',height: '48px', gap:'12px',top: '9px', left:' 958px', position: 'absolute',display : 'flex', flexDirection: 'column'}">
                    <div :style="{width: '24px', height: '24px'}">
                        <div :style="{width: '24px', height: '24px', left: '4.42px', position: 'absolute',display:'flex',flexDirection:'column', justifyContent:'space-around', top: '5px',}"> 
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15 19.25C15 20.0456 14.6839 20.8087 14.1213 21.3713C13.5587 21.9339 12.7956 22.25 12 22.25C11.2044 22.25 10.4413 21.9339 9.87869 21.3713C9.31608 20.8087 9 20.0456 9 19.25" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M5.58096 18.25C5.09151 18.1461 4.65878 17.8626 4.36813 17.4553C4.07748 17.048 3.95005 16.5466 4.01098 16.05L5.01098 7.93998C5.2663 6.27263 6.11508 4.75352 7.40121 3.66215C8.68734 2.57077 10.3243 1.98054 12.011 1.99998V1.99998C13.6977 1.98054 15.3346 2.57077 16.6207 3.66215C17.9069 4.75352 18.7557 6.27263 19.011 7.93998L20.011 16.05C20.0723 16.5452 19.9462 17.0454 19.6576 17.4525C19.369 17.8595 18.9386 18.144 18.451 18.25C14.2186 19.2445 9.81332 19.2445 5.58096 18.25V18.25Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </div>
                    </div>
                    <div :style="{width: '48px', height: '48px'}">
                        <img src="https://s3-alpha-sig.figma.com/img/80a2/f0d9/4cd112f12b18cc351a0d65cc6d9d59bf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OIYql2e8wYdwDCdygciPIx3OmKXR95yvCIBtGHb0bdQxILe5k14ATkGeh~9OnTGWNsfZ8LeeHK3Gijv6Ks5YHhKVVbVoomrPgTv1dg6CDO~z9elwx20lTBsYDutT6twhRLmhfSGPcc6oFM68y3S5uLEGu1sqSWCWFc4ObC5S5tRgAXQBnEI9USIcTrRzVTygnKIfKgiXXjyqWnoyCP~bOr83UBAKU1ChRAH2HmHPjhyy~NnaIaglvQjG5eAmUp1bcb2hLkLp9vxfVjJWhO5YIBH5JzmY78KrHUNl1tWeaCEQg9gTjSo1nYHi9u~nSwgvkWiuWW~01HMoULGlckLtXA__" alt="" 
                            :style="{width: '52.68px', height: '51.34px',top: '-1.82px', left: '36px', position: 'absolute', borderRadius: '50%', backgroundColor: '(217, 217, 217, 1)'}">
                    </div>

                </div>
                <button :style="{width: '459px',height: '48px', gap:'24px',top: '9px', left:'310px', position: 'absolute',borderRadius: '8px', border: '1px solid rgba(208,208,208,1)', textAlign: 'center',display: 'flex', flexDirection: 'column'}">
                    <div :style="{width: '44.31px',height: '36.31px', gap:'8px', padding: '(8px,12px,8px,12px)', display:'flex',flexDirection:'column', justifyContent:'space-around', top: '5px',left: '20px', position: 'absolute',}">
                        <svg fill="#000000" height="20.31px" width="20.31px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 488.4 488.4" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6 s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2 S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7 S381.9,104.65,381.9,203.25z"></path> </g> </g> </g></svg>
                    </div>
                    <input type="text" placeholder="search chatter" :style="{width: '122px',height: '27px', top: '9px',left: '60px', position: 'absolute',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center', border: 'none' }">
                </button>
            
            </div>
            <div :style="{width: '1076px', height: '803px',top: '96px', left: '292px', position: 'absolute', borderRadius: '8px', border: '1px soid rgba (208,208,208,1)', display: 'flex', flexDirection: 'row'}">
                <div :style="{width: '853px', height: '87px',top: '22px', left: '111px', position: 'absolute', gap:'380px', display: 'flex', flexDirection: 'row'}">
                    <div :style="{width: '296px', height: '87px',gap: '12px',display: 'flex', flexDirection: 'column'}">
                        <div  :style="{width: '77px',height: '48px', textAlign: 'center', fontFamily: '\'DM Sans\', sans-serif', fontSize: '32px',fontWeight: '500',lineHeight: '48px',letterSpacing: '0em', color:'rgba(17,17,17,1)' }"> FEED </div>
                        <div  :style="{width: '296px',height: '27px',textAlign: 'center',top: '48px', position: 'absolute',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }"> Explore different content you’d love </div>  
                    </div>  
                    <div class="publish"> 
                        <button type="button" @click="handlePostContent" :style ="{backgroundColor: 'rgba(84, 62, 224, 0.5)', border: 'none',color:'rgba(255, 255, 255, 1)', height:'24px',top:'14.5px', left: '35px', position:'absolute', fontFamily: '\'DM Sans\', sans-serif', fontSize:'16px', fontWeight: '700', lineHeight: '24px', textAlign:'center',  }"> Post a content</button>
                    </div> 
                </div>
                <div :style="{width: '854px', height: '80px',top: '158px', left: '110px', position: 'absolute', borderRadius: '8px', border: '1px soid rgba (208,208,208,1)'}">
                    <div :style="{width: '746px', height: '58px',top: '22px', left: '51px', position: 'absolute', gap:'240px', display: 'flex', flexDirection: 'row'}" >
                        <div>
                            <div :style="{width: '84px',height: '36px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }"> For you </div>
                            <div :style="{width: '84px',height: '6px', backgroundColor:'rgba(84,62,224,1)' }"></div>
                        </div>
                        <div :style="{width: '102px',height: '36px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em', color:'rgba(17,17,17,1)' }"> Featured </div>
                        <div  > Recent </div>
                    </div>
                </div>
                <div :style="{width: '854px', height: '1952px',top: '283px', left: '111px', position: 'absolute', borderRadius: '8px', border: '1px soid rgba (208,208,208,1)', borderStyle:'solid'}">
                    <div :style="{width: '620px', height: '610px',top: '30px', left: '44px', gap:'12px', position: 'absolute', borderStyle:'solid',  display:'flex', flexDirection: 'column'}">
                        <div class="user-details" :style="{width: '620px',borderStyle:'dotted', height: '574px',gap: '12px', display:'flex', flexDirection:'row'}">
                            <div class="detail" :style="{width: '620px',borderStyle:'dotted', height: '320px',gap: '24px', display:'flex', flexDirection:'column'}">
                                <div class="names" :style="{width: '526px',borderStyle:'dotted', height: '188px',gap: '12px', display:'flex', flexDirection:'column'}">
                                    <div class="name-date" :style="{width: '392px',borderStyle:'dotted', height: '96px',gap: '12px', display:'flex', flexDirection:'column'}">
                                        <img :style="{width: '96px',borderStyle:'dotted', height: '96px',borderRadius:'50%'}">
                                        <div :style="{width: '284px',borderStyle:'dotted', height: '71px',gap: '8px', display:'flex', flexDirection:'column'}">
                                            <div class="name" :style="{width: '151px',height: '36px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '24px',fontWeight: '500',lineHeight: '36px',letterSpacing: '0em', color:'rgba(17,17,17,1)' }"></div>
                                            <div class="date-occupation" :style="{width: '284px',borderStyle:'dotted', height: '27px',gap: '8px', display:'flex', flexDirection:'row'}">
                                                <div class="occupation" :style="{width: '143px',height: '27px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em', color:'rgba(17,17,17,1)' }"></div>
                                                <div class="date" :style="{width: '133px',height: '27px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em',textAlign: 'center', color:'rgba(17,17,17,1)' }"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="title" :style="{width: '526px',borderStyle:'dotted', height: '80px',gap: '8px', display:'flex', flexDirection:'column'}">
                                        <div class="post-title" :style="{width: '526px',height: '48px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '32px',fontWeight: '500',lineHeight: '48px',letterSpacing: '0em',textAlign: 'center', color:'rgba(17,17,17,1)' }"></div>
                                    </div>
                                </div>
                                <div class="content" :style="{width: '620px',height: '108px',  textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '18px',fontWeight: '400',lineHeight: '27px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }"></div>
                            </div>
                            
                        </div>
                        <div class="image-video" :style="{width: '612px',borderStyle: 'solid',height: '242px', backgroundColor: 'rgba(208,208,208,1)'}"></div>
                    </div> 
                    <div class= "analytics" :style="{width: '612px', height: '24px',top: '620px',left: '44px',  position: 'absolute', display:'flex', flexDirection: 'row', gap :'185px'}">
                        <div :style="{width: '68px', height: '24px',gap: '12px', display:'flex', flexDirection:'row'}">
                            <button  :style="{border: 'none',}"> <svg width="24px" height= "24px" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 448 448" id="svg2" version="1.1" inkscape:version="0.91 r13725" sodipodi:docname="comment-outline.svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="title3338">comment-outline</title> <defs id="defs4">
                            </defs> <sodipodi:namedview id="base" pagecolor="#ffffff" bordercolor="#666666" borderopacity="1.0" inkscape:pageopacity="0.0" inkscape:pageshadow="2" inkscape:zoom="0.9899495" inkscape:cx="430.79505" inkscape:cy="198.13527" inkscape:document-units="px" inkscape:current-layer="layer1" showgrid="true" units="px" inkscape:snap-bbox="true" inkscape:bbox-nodes="true" inkscape:window-width="1264" inkscape:window-height="842" inkscape:window-x="201" inkscape:window-y="440" inkscape:window-maximized="0" inkscape:object-nodes="true" inkscape:snap-nodes="true"> <inkscape:grid type="xygrid" id="grid3336" spacingx="16" spacingy="16" empspacing="2"></inkscape:grid> </sodipodi:namedview> <metadata id="metadata7"> <rdf:rdf> <cc:work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"></dc:type> <dc:title>comment-outline</dc:title> </cc:work> </rdf:rdf> </metadata> <g inkscape:label="Layer 1" inkscape:groupmode="layer" id="layer1" transform="translate(0,-604.36209)"> <path style="fill-rule:evenodd;stroke:none;stroke-opacity:1" d="M 35.199219 0 C 15.698404 0 0 15.698404 0 35.199219 L 0 316.80078 L 0 320 L 0 352 L 0 448 L 96 352 L 412.80078 352 C 432.3016 352 448 336.3016 448 316.80078 L 448 35.199219 C 448 15.698404 432.3016 0 412.80078 0 L 35.199219 0 z M 48 32 L 400 32 C 408.86402 32 416 39.135984 416 48 L 416 304 C 416 312.86402 408.86402 320 400 320 L 80 320 L 32 368 L 32 304 L 32 288 L 32 48 C 32 39.135984 39.135984 32 48 32 z " transform="translate(0,604.36209)" id="path3335"></path> </g> </g></svg> </button>
                            <div :style="{width: '32px',height: '24px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }">  200 </div>
                        </div>
                        <div :style="{width: '57px', height: '24px',gap: '3px', display:'flex', flexDirection:'row'}">
                            <button  :style="{border: 'none',}"> <svg height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-49.5 -49.5 594.00 594.00" xml:space="preserve" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#0c0d0d;" d="M362.96,14.24c-49.72,0-92.95,27.53-115.46,68.13v398.39C284.67,452.84,495,288.55,495,146.28 C495,73.36,435.88,14.24,362.96,14.24z"></path> <path style="fill:#0d0c0d;" d="M132.04,14.24C59.12,14.24,0,73.36,0,146.28c0,142.26,210.33,306.55,247.5,334.48V82.37 C224.99,41.77,181.76,14.24,132.04,14.24z"></path> </g> </g></svg> </button>
                            <div :style="{width: '25px',height: '24px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }"> 120 </div>
                        </div>
                        <div :style="{width: '250px', height: '24px',gap: '6px', display:'flex', flexDirection:'row'}">
                            <button :style="{border: 'none',}"> <svg fill="#000000" height="24px" width="24px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g transform="translate(1 1)"> <g> <g> <path d="M212.333,353.133h34.133h17.067h34.133h17.067h34.133h17.067h51.2h25.6c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533h-25.6V148.333h-51.2V114.2h-68.267v59.733h-51.2v51.2h-34.133v-76.8h-68.267v51.2h-51.2v136.533h-25.6 c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6h51.2h17.067h34.133H212.333z M400.067,165.4v170.667h-34.133 V165.4H400.067z M314.733,156.867V139.8c5.12,0,8.533-3.413,8.533-8.533h17.067c0,5.12,3.413,8.533,8.533,8.533v8.533v8.533 c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533V191c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533 v17.067c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533v17.067c-5.12,0-8.533,3.413-8.533,8.533 s3.413,8.533,8.533,8.533V293.4c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533v17.067 c-5.12,0-8.533,3.413-8.533,8.533h-17.067c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 s-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533V242.2 c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533v-17.067c5.12,0,8.533-3.413,8.533-8.533 S319.853,191,314.733,191v-17.067c5.12,0,8.533-3.413,8.533-8.533C323.267,160.28,319.853,156.867,314.733,156.867z M263.533,191 h34.133v145.067h-34.133V225.133V191z M246.467,242.2v93.867h-34.133V242.2H246.467z M109.933,336.067V216.6h34.133v119.467 H109.933z M161.133,336.067V199.533V165.4h34.133v59.733v110.933H161.133z"></path> <path d="M331.8,156.867c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,156.867,331.8,156.867z"></path> <path d="M331.8,191c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533c-5.12,0-8.533,3.413-8.533,8.533 S326.68,191,331.8,191z"></path> <path d="M331.8,208.067c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,208.067,331.8,208.067z"></path> <path d="M331.8,242.2c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,242.2,331.8,242.2z"></path> <path d="M331.8,276.333c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 C340.333,279.747,336.92,276.333,331.8,276.333z"></path> <path d="M331.8,310.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533c5.12,0,8.533-3.413,8.533-8.533 S336.92,310.467,331.8,310.467z"></path> <path d="M502.467,370.2h-25.6V105.667c0-14.507-11.093-25.6-25.6-25.6H58.733c-14.507,0-25.6,11.093-25.6,25.6V370.2h-25.6 c-5.12,0-8.533,3.413-8.533,8.533v25.6c0,14.507,11.093,25.6,25.6,25.6h460.8c14.507,0,25.6-11.093,25.6-25.6v-25.6 C511,373.613,507.587,370.2,502.467,370.2z M50.2,105.667c0-5.12,3.413-8.533,8.533-8.533h392.533 c5.12,0,8.533,3.413,8.533,8.533V370.2H323.267c-5.12,0-8.533,3.413-8.533,8.533v8.533H195.267v-8.533 c0-5.12-3.413-8.533-8.533-8.533H50.2V105.667z M493.933,404.333c0,5.12-3.413,8.533-8.533,8.533H24.6 c-5.12,0-8.533-3.413-8.533-8.533v-17.067h25.6H178.2v8.533c0,5.12,3.413,8.533,8.533,8.533h136.533 c5.12,0,8.533-3.413,8.533-8.533v-8.533h136.533h25.6V404.333z"></path> </g> </g> </g> </g></svg></button>
                            <div :style="{width: '85px',height: '24px',textAlign: 'center',fontFamily: '\'DM Sans\', sans-serif', fontSize: '16px',fontWeight: '400',lineHeight: '24px',letterSpacing: '0em', color:'rgba(98,98,98,1)' }"> 2980 views </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script >

export default {
    methods: {
        handlePostContent (){
            this.$router.push("/postscreen1");
        },
        handlePublish (){
            this.$router.push("/postscreen2");
        },
    }
}

</script>


<style scoped>
.publish{
    width: 177px;
    height: 56px;
    padding: 8px, 16px, 8px, 16px;
    border-radius: 8px;
    gap: 380px;
    top: 36px;
    left: 787px;
    background-color: rgba(84, 62, 224, 1);
    position: absolute;

}

</style>