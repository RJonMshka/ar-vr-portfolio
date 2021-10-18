import avatar1 from "../assets/images/Project2/avatar1_model.PNG";
import avatar2 from "../assets/images/Project2/avatar2_model.PNG";
import bench from "../assets/images/Project2/bench_model.PNG";
import bicycle from "../assets/images/Project2/bicycle_model.PNG";
import bin from "../assets/images/Project2/bin_model.PNG";
import canopy from "../assets/images/Project2/canopy_model.PNG";
import car from "../assets/images/Project2/car_model.PNG";
import chair from "../assets/images/Project2/chair_model.PNG";
import coffee from "../assets/images/Project2/coffee-model.PNG";
import couch from "../assets/images/Project2/couch_model.PNG";
import customLamp from "../assets/images/Project2/custom_lamp_model.PNG";
import fence from "../assets/images/Project2/Fence_model.PNG";
import folder from "../assets/images/Project2/folder_model.PNG";
import ftc from "../assets/images/Project2/ftc_model.PNG";
import grass from "../assets/images/Project2/Grass_model.PNG";
import keyboard from "../assets/images/Project2/keyboard_model.PNG";
import lampPost from "../assets/images/Project2/lamp_post_model.PNG";
import lptree from "../assets/images/Project2/lptree_model.PNG";
import main from "../assets/images/Project2/main_image.PNG";
import monitor from "../assets/images/Project2/monitor_model.PNG";
import pineTree from "../assets/images/Project2/pine_tree_model.PNG";
import poolTable from "../assets/images/Project2/pool_table_model.PNG";
import poolballs from "../assets/images/Project2/poolballs_model.PNG";
import printer from "../assets/images/Project2/printer_model.PNG";
import railing from "../assets/images/Project2/railing_model.PNG";
import rock from "../assets/images/Project2/rock_model.PNG";
import stairs from "../assets/images/Project2/stairs-model.PNG";
import stc from "../assets/images/Project2/stc_model.PNG";
import scone from "../assets/images/Project2/street_cone_model.PNG";
import tsign from "../assets/images/Project2/traffic_sign_model.PNG";
import trashcan from "../assets/images/Project2/trash_can_model.PNG";
import tv from "../assets/images/Project2/tv_model.PNG";
import poollamp from "../assets/images/Project2/poolLamp_model.PNG";
import pstick from "../assets/images/Project2/poolstick_model.PNG";
import ps5 from "../assets/images/Project2/ps5_model.PNG";
import ps5ctrl from "../assets/images/Project2/ps5ctrl_model.PNG";
import ttgen from "../assets/images/Project2/ttball_generator_model.PNG";
import ttball from "../assets/images/Project2/ttball_model.PNG";
import ttbat from "../assets/images/Project2/ttbat_model.PNG";
import ttnet from "../assets/images/Project2/ttnet_model.PNG";
import tttable from "../assets/images/Project2/tttable_model.PNG";
import tvholder from "../assets/images/Project2/tvholder_model.PNG";
import vm from "../assets/images/Project2/vending_machine.PNG";
import page from "../assets/images/Project2/page_model.PNG";


const p2Data =  {
    "introduction": {
        "text": "Project 2 for CS-428 that I have been working on is based on helping people with a phobia of working in an Office or returning to the office. Some other names of this kind of phobia are Ergophobia or ‘work aversion’. Both the terms are derived from Greek ergon meaning work and 'phobos' which comes from the Greek God of Fear. The individuals suffering from it are afraid to seek employment from fear of being yelled at by superiors, or, in general, due to performance or social anxiety. Ergophobia is thus a complex phobia as it may be part of many different phobias or mental issues. Some of the causes of fear of going to work are Schizophrenia, Fear of rejection, disorderly sleep, medical drugs, traumatic incidents, clinical depression or neurological dysfunctions, and many more. Also, after the COVID-19 pandemic, people all across the world have been working from home. Some of them are finding remote working better than working in an office environment. However, the effect of COVID-19 is decreasing day by day (thanks to our vaccine researchers) and a lot of organizations are trying to open up their office space and shifting to the work environment which was normal 2 years ago. Due to this sudden shift, people who like working from home will eventually find discomfort in scheduling their work and daily activities. It can not only affect their work productivity but also can lead to work-related stress, social anxiety, and other office-related phobias. <br/><br/> With the help of Unity, VRTK v4, and virtual reality headsets, this application tries to overcome the phobia of working in (or returning to) an office environment. The Project is a VR application and is best experienced when it is launched on a VR headset like Oculus Quest or Oculus Quest 2. The individual using this application will go through various experiences like Performing a job, getting scolded by office colleagues, roaming around the office environment, going to a meeting, playing recreational games, and walking outside as well. By adding such features, the individual can face his/her fear of offices by confronting office colleagues, as well as get a feeling of accomplishment by doing some easy tasks and finally, have some fun playing games. All these features are added so that the level of phobia for that individual gets reduced.",
        "heading": "INTRODUCTION",
        "imageCaption": "Project 2 Main Image",
        "imageAlt": "intro image",
    },
    "setup": [
        "This project will work on either Windows or Mac OS. Space of around 10GBs is required on your machines. Atleast 4GBs of RAM is enough for Project to run",
        "Unity software is necessary to edit, build and run this project, so make sure you download it from <a href='https://unity3d.com/get-unity/download' target='_blank'>here</a>.",
        "Download Unity with the exact version 2019.4.28f1. This is to make sure that everything works on your system perfectly.",
        "Download Unity Hub, it will help you download code editors, SDK for different platform and it will also help you manage your projects, even with different Unity versions. Download Android SDK as it will be required to build the project on Oculus Quest 1 or Oculus Quest 2 VR headsets.",
        "Please clone the Github repository mentioned below (or you can check it <a href='https://github.com/RJonMshka/cs428-Project2' target='_blank'>here</a> as well) into your local machine and take the pull of the latest code available in the 'main' branch.",
        "Open Unity Hub. In 'Projects' section, click on ADD button, it will open up the a directory window, choose the folder that has the Github repository cloned into it. Once you are done with that, Unity will open up.",
        "This project uses 'VRTK v4' which is a Virtual Reality Toolkit, used for building Virtual Reality applications in Unity. You can read about VRTK4 <a href='https://www.vrtk.io/' target='_blank'>here</a>.",
        "VRTK v4 also uses independent feature packages called Tilia Packages for developing functionality of VR apps. The Tilia packages are available <a href='https://www.vrtk.io/tilia.html' target='_blank'>here</a>. ",
        "Once the scene 'ScareCoOffices' loads up in your Unity environment, please check whether all the required tilia packages are there or not.",
        "Go to 'Window > Package manager'. Once it opens up, please if Tilia Packages are installed or not. By default, they should get installed on the first project load (if your machine is connected to internet). If they are not getting installed, please install them manually by clicking each one of them and clicking the 'install' button.",
        "If you have Oculus Quest VR Headset, connected it through USB to the machine and go to 'File > Build Settings'. Make sure you switch platforms to 'Android SDK'. Please select the name of your headset in the 'Run Device' dropdown.",
        "Make sure the 'CameraRigs.SpatialSimulator' in the scene is inactive and 'CameraRigs.UnityXR' is active.",
        "If you don't have the access to VR headsets, you can still experience the application with CameraRigs.SpatialSimulator. For this you have to do opposite of the previous step. Activate 'CameraRigs.SpatialSimulator' and deactivate 'CameraRigs.UnityXR' and then press play button. With this you can navigate the environment with WASD keys on your computer. But this way you cannot interact much with environment like (grab, pick or throw interactable objects).",
        "Now, in build settings, click 'Build and Run'. It will take some time for your machine to build apk file of the project and copy it into the vr headset's memory.",
        "Once the build is complete, wear the headset, the app will start automatically, if it doesn't, then in your VR dashboard, go to 'Apps > Unknown Sources > com.cs428.workPhobiaRajat'. Click on this file and an app will launch in your VR Headset.",
        "Walk through the project environment which consists of 3D models and the space will look like an office space.",
        "Now you are all set. Have fun interacting with the VR environment. I hope your have a wonderful experience."
    ],
    "description": {
        "text": "This Project has two different views. The office view which completely focuses on the phobia and an outside view, which is not particularly related to the phobia but it is an addition to the whole experience. The project documentation is set up in such a way that the description is split into two parts: 1. Inside the Office Space (where the phobia experience is) and 2. Outer Space which looks like a parking space.",
        "heading": "PROJECT DESCRIPTION"
    },
    "desc1": {
        "text": "Inside space looks like a casual office environment with two-floor setups, consisting of a few cubical with chairs, keyboard monitor representing a normal office cubical. Then there is a Television (big one) in the main hall requesting the user to perform few tasks, like printing pages and moving folders to a different place. Once those tasks are complete, the user gets assertive audio feedback from the avatar standing next to the television screen. Also, the tasks on television get updated. There is a person avatar on the first floor sitting in one of the cubical which yells at the user when approached. The user can print a page and new pages are automatically generated and the user can interact with them as well. The folders are also interactable. To move to the second floor, accessibility of stairs is provided. On the 2nd floor, there is a cafeteria where the user can see two avatars sitting and experience the ambient sound of a typical cafeteria. Roaming around those avatars can help the user to overcome social anxiety and social insecurities. Also, there is a coffee room where is coffee machine is located, there is also an ambient sound related to coffee. Also, there are various lighting schemes near the recreational area where you can play 3 types of games (Table Tennis, 8-Ball Pool, and Video game). By playing a game, I mean that the user can interact with some parts of the game. For instance, a user can interact with a pool stick and hit pool balls. There are appropriate physics, motion, and sounds attached to all of them. Similarly, in the table tennis environment, a user can interact with table tennis bats, ping bong balls. Since the ping pong ball is so easy to lose, there is a ping pong ball generator that generates ping pong ball into a box and the user can interact with any number of newly generated balls. Now the video game setup looks like a PlayStation 5 with controllers along with a couch, tables, and a television. The controllers are also interactable and if the user picks up one of the controllers, the PS5 logo appears on the television screen with ps5 launch audio. The user can roam around other parts of the 2nd Floor also like the meeting room. The meeting room has an ambient sound of which feels like someone is writing something on the whiteboard. As soon as the user approaches the meeting room, a person avatar asks and stops the user saying that the user is late for the meeting. Now, there is an interactable door on the 2nd floor that can be opened with grab action with VR controllers, and then the user will be able to access the outer world.",
        "heading": "Inside the Office Space",
        "imageAlt": "Inside View",
        "imageCaption": "Project 2 Office View",
        "assets": {
            "fromInternet": [
                {
                    "text": "<span class='model-name'>Printer Model by “c-brenner”</span>  <a href='https://www.cgtrader.com/free-3d-models/interior/office/laser-printer-hp' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": printer,
                        "imageAlt": "Printer",
                        "caption": "Printer Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Sitting Table and Chair Model by “ahmed9617”</span>  <a href='https://www.cgtrader.com/free-3d-models/exterior/landscape/out-door-chair-and-table' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": stc,
                        "imageAlt": "STCM",
                        "caption": "Sitting Table and Chair Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Folder Model by “inonzur94”</span>  <a href='https://www.cgtrader.com/free-3d-models/household/other/ring-binder-1e0dd9c2-26be-407d-830f-08a99bf32e9b' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": folder,
                        "imageAlt": "Folder",
                        "caption": "Folder Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Office Chair Model by “c-brenner”</span>  <a href='https://www.cgtrader.com/free-3d-models/interior/office/office-chair-allegro' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": chair,
                        "imageAlt": "Chair",
                        "caption": "Office Chair Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Couch Model by “fizzlefreshh”</span>  <a href='https://sketchfab.com/3d-models/black-leather-couch-e868e007bacf425cb0b3df2b44397bf6' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": couch,
                        "imageAlt": "Couch",
                        "caption": "Couch Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Television Model by “DailyArt”</span>  <a href='https://sketchfab.com/3d-models/television-bbf7a1c3ae0c4f0db45b923388d9f315' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": tv,
                        "imageAlt": "Television",
                        "caption": "Television Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pool Table Model by “42yeah”</span>  <a href='https://sketchfab.com/3d-models/pool-table-84c402789645463eacb8fbb081f0bb67' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": poolTable,
                        "imageAlt": "Pool Table",
                        "caption": "Pool Table Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Railing Model by “Amin-montazeri”</span>  <a href='https://www.cgtrader.com/free-3d-models/architectural/other/modern-railing' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": railing,
                        "imageAlt": "Railing Model",
                        "caption": "Railing Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Coffee Machine Model by “insya”</span>  <a href='https://sketchfab.com/3d-models/coffee-maker-2cd762456f334cee973619bd813680cf' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": coffee,
                        "imageAlt": "Coffee Machine Model",
                        "caption": "Coffee Machine Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Stairs Model by “leviotis”</span>  <a href='https://www.cgtrader.com/free-3d-models/interior/other/modern-stairs--3' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": stairs,
                        "imageAlt": "Stairs Model",
                        "caption": "Stairs Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Monitor Model by “a-anas97”</span>  <a href='https://www.cgtrader.com/free-3d-models/electronics/computer/monitor-curved' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": monitor,
                        "imageAlt": "Monitor Model",
                        "caption": "Monitor Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Keyboard Model by “savagerus”</span>  <a href='https://www.cgtrader.com/free-3d-models/electronics/computer/apple-keyboard-a0615622-00a1-407b-aeed-01f94754a4c8' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": keyboard,
                        "imageAlt": "Keyboard Model",
                        "caption": "Keyboard Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pool Balls Model by “György Pejović”</span>  <a href='https://sketchfab.com/3d-models/billiard-balls-0dd3b1e39fd544f79d7464e174da3502' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": poolballs,
                        "imageAlt": "Pool Balls",
                        "caption": "Pool Balls"
                    }
                },
                {
                    "text": "<span class='model-name'>Custom Lamp Model by “drawart”</span>  <a href='https://free3d.com/3d-model/pendant-light-zaha-light-17720.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": customLamp,
                        "imageAlt": "Custom Lamp Model",
                        "caption": "Custom Lamp Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Office Trash Can Model by “sweethome3d”</span>  <a href='http://www.sweethome3d.com/models/contributions/poubelleInox.zip' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": trashcan,
                        "imageAlt": "Office Trash Can Model",
                        "caption": "Office Trash Can Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Avatar 1 Model by “ayeshazaki16”</span>  <a href='https://free3d.com/3d-model/hiker-base-mesh-856162.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": avatar1,
                        "imageAlt": "Avatar 1 Model",
                        "caption": "Avatar 1 Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Avatar 2 Model by “freemodelslowpoly”</span>  <a href='https://free3d.com/3d-model/model-without-textured-for-games-81527.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": avatar2,
                        "imageAlt": "Avatar 2 Model",
                        "caption": "Avatar 2 Model"
                    }
                }
            ],
            "created": [
                {
                    "text": "<span class='model-name'>Table Tennis Table Model:</span> ",
                    "imageData": {
                        "imageSrc": tttable,
                        "imageAlt": "Table Tennis Table Model",
                        "caption": "Table Tennis Table Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Table Tennis Net Model:</span> ",
                    "imageData": {
                        "imageSrc": ttnet,
                        "imageAlt": "Table Tennis Net Model",
                        "caption": "Table Tennis Net Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Table Tennis Racquet:</span> ",
                    "imageData": {
                        "imageSrc": ttbat,
                        "imageAlt": "Table Tennis Racquet",
                        "caption": "Table Tennis Racquet"
                    }
                },
                {
                    "text": "<span class='model-name'>Table Tennis Ping Pong Ball:</span> ",
                    "imageData": {
                        "imageSrc": ttball,
                        "imageAlt": "Table Tennis Ping Pong Ball",
                        "caption": "Table Tennis Ping Pong Ball"
                    }
                },
                {
                    "text": "<span class='model-name'>Table Tennis Ping Pong Ball Generator:</span> ",
                    "imageData": {
                        "imageSrc": ttgen,
                        "imageAlt": "Table Tennis Ping Pong Ball Gen",
                        "caption": "Table Tennis Ping Pong Ball Generator"
                    }
                },
                {
                    "text": "<span class='model-name'>Pool Stick Model:</span> ",
                    "imageData": {
                        "imageSrc": pstick,
                        "imageAlt": "Pool Stick Model",
                        "caption": "Pool Stick Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Page Model:</span> ",
                    "imageData": {
                        "imageSrc": page,
                        "imageAlt": "Page Model",
                        "caption": "Page Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Playstation Model:</span> ",
                    "imageData": {
                        "imageSrc": ps5,
                        "imageAlt": "Playstation Model",
                        "caption": "Playstation Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Playstation Controller:</span> ",
                    "imageData": {
                        "imageSrc": ps5ctrl,
                        "imageAlt": "Playstation Controller",
                        "caption": "Playstation Controller"
                    }
                },
                {
                    "text": "<span class='model-name'>Television Wooden Holder Model:</span> ",
                    "imageData": {
                        "imageSrc": tvholder,
                        "imageAlt": "Television Wooden Holder Model",
                        "caption": "Television Wooden Holder Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pool Table Lamp Model:</span> ",
                    "imageData": {
                        "imageSrc": poollamp,
                        "imageAlt": "Pool Table Lamp Model",
                        "caption": "Pool Table Lamp Model"
                    }
                }
            ],
            "images": [
                {
                    "text": "<span class='model-name'>Coffee Room Image</span>  <a href='https://res.cloudinary.com/grohealth/image/upload/f_auto,fl_lossy,q_auto/v1581688713/DCUK/Content/iStock-938993594-1000x600.jpg' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Wooden Texture Image</span>  <a href='https://www.istockphoto.com/photo/natural-wood-texture-gm1145602814-308400615' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Stairs Wooden Texture Image</span>  <a href='https://in.pinterest.com/pin/49258189658086394/' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Page Image</span>  <a href='https://as2.ftcdn.net/v2/jpg/03/30/82/49/1000_F_330824936_CM6FxMIkoZ8qN02IfndhVQBThjNW61u9.jpg' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>PS5 Image</span>  <a href='https://assets1.ignimgs.com/2020/01/07/ps5-1578419844475_160w.jpg?width=1280' target='_blank'>link</a>",
                }
            ],
            "audios": [
                {
                    "text": "<span class='model-name'>Printer Audio</span> <a href='https://www.fesliyanstudios.com/royalty-free-sound-effects-download/printer-103' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Ping Pong Ball Hit Sound</span> <a href='https://orangefreesounds.com/ping-pong-ball-bounce-sound-effect/' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Pool Ball Hit Sound</span> <a href='https://www.partnersinrhyme.com/soundfx/sports_sounds/sports_pool-ball-hit_wav.shtml' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Playstation 5 launch Sound</span> <a href='https://mp3download.to/6en/k0Lcz8X85Fk.html' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Office Ambient Sound</span> <a href='https://mixkit.co/free-sound-effects/office/' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Coffee Machine Sound</span> <a href='https://quicksounds.com/library/sounds/coffee-machine' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>'Well Done' voice audio</span> <a href='https://etc.usf.edu/clipaudio/single/phrase-well-done-1-male-voice.html' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Cafeteria Ambient Sound</span> <a href='https://www.123rf.com/audio_154485098_improve-your-cafe--restaurant-ambience-with-this-sound.html' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>'Whats Going On' voice audio</span> <a href='https://www.soundsnap.com/streamers/play2.php?t=e&p=files%2Faudio%2Ffo%2F470790-Male_Angry_What-s_Going_On_1.wav' target='_blank'>link</a>",
                }
            ]
        }
    },
    "desc2": {
        "text": "In the outside work, the space looks like a parking space with cars, bicycles, trees, grass, road, etc. Also, there are some benches, vending machines, bin containers nearby. If the user tries to go the opposite side of the building, there is a small park which consists of grass, rock, trees, folding tables and chair and canopy. There are other models like lamp post, traffic sign, fence which gives the whole view an authentic feel.",
        "heading": "Outside Space",
        "imageAlt": "Outside View",
        "imageCaption": "Project 2 Outside View",
        "assets": {
            "fromInternet": [
                {
                    "text": "<span class='model-name'>Car Model by “Shamszeb”</span>  <a href='https://clara.io/view/0a1bebd7-24ef-4a21-9933-27ac9afe650e' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": car,
                        "imageAlt": "Car Model",
                        "caption": "Car Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Bicycle Model by “sreeragm”</span>  <a href='https://www.cgtrader.com/free-3d-models/vehicle/bicycle/cycle-eb8f787a-74f4-4ce1-9c99-5a87958a395c' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": bicycle,
                        "imageAlt": "Bicycle Model",
                        "caption": "Bicycle Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Fence Model by “vilitay”</span>  <a href='https://www.cgtrader.com/free-3d-models/exterior/street/metal-fence-0cae6c48-0c60-4a5e-998e-6daece737ec7' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": fence,
                        "imageAlt": "Fence Model",
                        "caption": "Fence Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Vending Machine Model by “manept”.</span>  <a href='https://www.cgtrader.com/free-3d-models/various/various-models/vending-machine-9209cd9e-0b72-4409-8c68-7f76080a1fe4' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": "",
                        "imageAlt": "Vending Machine Model",
                        "caption": "Vending Machine Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Lamp Post Model by “NienkeSt”</span>  <a href='https://sketchfab.com/3d-models/stylistic-lamppost-0e3a4b2486a9440493174a96dafc516c' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": lampPost,
                        "imageAlt": "Lamp Post Model",
                        "caption": "Lamp Post Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pine Tree Model by “Unixium”</span>  <a href='https://www.cgtrader.com/free-3d-models/plant/conifer/conifer-macedonian-pine' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": pineTree,
                        "imageAlt": "Pine Tree Model",
                        "caption": "Pine Tree Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Grass Model by “shadedancer619”</span>  <a href='https://www.cgtrader.com/free-3d-models/plant/grass/grass-patterns' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": grass,
                        "imageAlt": "Grass Model",
                        "caption": "Grass Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Bench Model by “raccoonice”</span>  <a href='https://free3d.com/3d-model/bench-84662.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": bench,
                        "imageAlt": "Bench Model",
                        "caption": "Bench Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Street Cone Model by “paraneuf”</span>  <a href='https://free3d.com/3d-model/street-cone-pbr-438608.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": scone,
                        "imageAlt": "Street Cone",
                        "caption": "Street Cone"
                    }
                },
                {
                    "text": "<span class='model-name'>Rock Model by “tyrosmith”</span>  <a href='https://free3d.com/3d-model/low-poly-rock-4631.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": rock,
                        "imageAlt": "Rock Model",
                        "caption": "Rock Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Traffic Sign Model by “hadi.saputra”</span>  <a href='https://sketchfab.com/3d-models/traffic-sign-20mph-4b6204d118654baf874606bb3a916993#download' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": tsign,
                        "imageAlt": "Traffic Sign Model",
                        "caption": "Traffic Sign Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Folding Table and Chair Model by “blagodaryov-art”</span>  <a href='https://www.cgtrader.com/items/2982127/download-page' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": ftc,
                        "imageAlt": "Folding Table and Chair Model",
                        "caption": "Folding Table and Chair Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Low Poly Tree Model by “medo_544”</span>  <a href='https://free3d.com/3d-model/low-poly-tree-449895.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": lptree,
                        "imageAlt": "Low Poly Tree Model",
                        "caption": "Low Poly Tree Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Canopy Model by “sweethome3d”</span>  <a href='http://www.sweethome3d.com/models/contributions/gardenUmbrella.zip' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": canopy,
                        "imageAlt": "Canopy Model",
                        "caption": "Canopy Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Bin Container Model by “sweethome3d”</span>  <a href='http://www.sweethome3d.com/models/contributions/container.zip' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": bin,
                        "imageAlt": "Bin Container Model",
                        "caption": "Bin Container Model"
                    }
                }
            ],
            "audios": [
                {
                    "text": "<span class='model-name'>Street Ambient Sound</span> <a href='https://soundimage.org/sfx-urban-ambience/' target='_blank'>link</a>"
                }
            ]
        }
    }
}

export default p2Data;