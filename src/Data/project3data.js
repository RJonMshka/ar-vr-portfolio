// import intro from "../assets/images/Project3/intro.PNG";
import calculator from "../assets/images/Project3/Calculator.PNG";
import fireext from "../assets/images/Project3/fireext.PNG";
import eraser from "../assets/images/Project3/eraser.PNG";
import notebook from "../assets/images/Project3/notebook.PNG";
import ladder1 from "../assets/images/Project3/ladder1.PNG";
import ladder2 from "../assets/images/Project3/ladder2.PNG";
import ladder3 from "../assets/images/Project3/ladder3.PNG";
import Lamp from "../assets/images/Project3/Lamp.PNG";
import mechanoid from "../assets/images/Project3/mecahnoid.PNG";
import lpch from "../assets/images/Project3/lpch.PNG";
import Menu from "../assets/images/Project3/Menu.PNG";
import outerroom from "../assets/images/Project3/outerroom.PNG";
import paperclips from "../assets/images/Project3/paperclips.PNG";
import pencil from "../assets/images/Project3/pencil.PNG";
import pencilholder from "../assets/images/Project3/pencilholder.PNG";
import phone from "../assets/images/Project3/phone.PNG";
import pushpins from "../assets/images/Project3/pushpins.PNG";
import ruler from "../assets/images/Project3/ruler.PNG";
import scissors from "../assets/images/Project3/scissors.PNG";
import subjecttable from "../assets/images/Project3/subjecttable.PNG";
import watch from "../assets/images/Project3/watch.PNG";


const p3Data = {
    "introduction": {
        "text": "Project 3 is a Virtual Reality (VR) application which is an extension of Project 2 (Work Phobia). It includes how a VR user experiences the virtual environment when the navigation, visuals, audios, and perspectives change and the way that the user interacts under those perspectives. The project consists of multiple scenes starting with the classic Project 2 scene with the addition of a spatial menu, from where the user can navigate to other scenes. The first different scene that was built as part of Project 3 is “The Mego Playset” version of Project 2. It represents the whole Project 2 room as a dollhouse sitting on a table with some action figures and a lamp in another room. Users can change the position/location of items in the whole office area and can also place the action figures which are outside the room, into the room. The next version is “The Land of the Giants” version where the user’s perspective changes and becomes equivalent to a person with a height of about 1 foot. Here, the user lands on a typical office table where the user can interact with different items on the table in a different way, experience audios differently and can also climb up and down from this and other tables nearly. The third version is “Dancing on the Ceiling” where the scaling is normal, but the user gets control of rotating the whole world with the factor of 90-degree change on a particular axis and the user would experience the things around him/her falling as a result of the change in room’s orientation. The last version is “Zero Gravity” where the user’s virtual body becomes unaffected by gravity so that the user levitates in the air and moves around the room with the help of some external force(s). Also, all the interactable objects in the room are unaffected by gravity.",
        "heading": "INTRODUCTION",
        "imageCaption": "Project 3 Main Image",
        "imageAlt": "intro image",
        "imageSrc": ""
    },
    "setup": [
        "This project will work on either Windows or Mac OS. Space of around 10GBs is required on your machines. Atleast 4GBs of RAM is enough for Project to run",
        "Unity software is necessary to edit, build and run this project, so make sure you download it from <a href='https://unity3d.com/get-unity/download' target='_blank'>here</a>.",
        "Download Unity with the exact version 2019.4.28f1. This is to make sure that everything works on your system perfectly.",
        "Download Unity Hub, it will help you download code editors, SDK for different platform and it will also help you manage your projects, even with different Unity versions. Download Android SDK as it will be required to build the project on Oculus Quest 1 or Oculus Quest 2 VR headsets.",
        "Please clone the Github repository mentioned below (or you can check it <a href='https://github.com/RJonMshka/CS428Project3' target='_blank'>here</a> as well) into your local machine and take the pull of the latest code available in the 'main' branch.",
        "Open Unity Hub. In 'Projects' section, click on ADD button, it will open up the a directory window, choose the folder that has the Github repository cloned into it. Once you are done with that, Unity will open up.",
        "This project uses 'VRTK v4' which is a Virtual Reality Toolkit, used for building Virtual Reality applications in Unity. You can read about VRTK4 <a href='https://www.vrtk.io/' target='_blank'>here</a>.",
        "VRTK v4 also uses independent feature packages called Tilia Packages for developing functionality of VR apps. The Tilia packages are available <a href='https://www.vrtk.io/tilia.html' target='_blank'>here</a>. ",
        "You can see all the scenes in the ‘Assets/Scenes’ directory. Click on any one of them to see its content. Add all of the scene to the build settings if not already added. Add the ‘NormalScene’ to the build settings first. This will make sure that this is the default scene and that user will land into this scene’s setting once the application has started running on a device.",
        "Go to 'Window > Package manager'. Once it opens up, please if Tilia Packages are installed or not. By default, they should get installed on the first project load (if your machine is connected to internet). If they are not getting installed, please install them manually by clicking each one of them and clicking the 'install' button.",
        "If you have Oculus Quest VR Headset, connected it through USB to the machine and go to 'File > Build Settings'. Make sure you switch platforms to 'Android SDK'. Please select the name of your headset in the 'Run Device' dropdown.",
        "Make sure the 'CameraRigs.SpatialSimulator' in every scene is inactive and 'CameraRigs.UnityXR' is active.",
        "If you don't have the access to VR headsets, you can still experience the application with CameraRigs.SpatialSimulator. For this you have to do opposite of the previous step. Activate 'CameraRigs.SpatialSimulator' and deactivate 'CameraRigs.UnityXR' and then press play button. With this you can navigate the environment with WASD keys on your computer. But this way you cannot interact (like grab, pick or throw interactable objects) easily in the environment. ", 
        "Now, in build settings, click 'Build and Run'. It will take some time for your machine to build apk file of the project and copy it into the vr headset's memory.",
        "Once the build is complete, wear the headset, the app will start automatically, if it doesn't, then in your VR dashboard, go to 'Apps > Unknown Sources > com.cs428.p3Rajat. Click on this file and an app will launch in your VR Headset.",
        "Walk through the project environment which consists of 3D models and the space will look like an office space.",
        "Now you are all set. Have fun interacting with the VR environment. I hope your have a wonderful experience."
    ],
    "description": {
        "text": "There is a total 5 number of scenes in the application. The classic Project 2 scene, Mego Playset version scene, Land of the Giants version scene, Dancing on the Ceiling Scene, and Zero Gravity Scene. There is a menu to navigate between all these versions.",
        "heading": "PROJECT DESCRIPTION"
    },
    "menu": {
        "text": `The menu here is pretty simple, consisting of 5 spatial buttons except in the Dancing on the Ceiling version where the menu also has 2 additional buttons which act as inputs to rotate the room left or right. The menu is activated and deactivated with a button click “Y” on the left controller of Oculus Quest or Quest 2. A click is the preferred input as compared to hold for the proper working of the menu’s display.  If navigating through a spatial simulator camera, the menu can be activated/deactivated with a right click of the mouse.<br />
        Another feature of the menu is that, in every scene, one button on the menu is disabled and that button belongs to switching scene to the current scene which user is currently experiencing. For example, if the user is navigating in the Mego Playset scene, then the Mego Playset button will be disabled. There are different active, inactive, hover, disabled visual states. It means that the user will be able to distinguish between them very clearly. The user needs to use Tilia’s Spatial straight pointer (which can be activated with the right controller’s joystick) for interacting with buttons on the menu. If the right controller’s joystick button is pressed which spatial pointer is pointing at an active menu button item, the scene will be switched accordingly.<br />
        The spatial buttons on the menu have colliders associated with them, so the size and location of the menu are chosen accordingly. Its size is not that large and it is attached to the left controller, which means that it will move wherever the left controller goes. It is not that small that the user can’t read its content. It has a decent amount of size and closeness to the user’s perspective camera.<br />`,
        "heading": "The Menu",
        "imageSrc": Menu,
        "imageCaption": "Menu for Navigation between different version",
        "imageAlt": "Menu for Navigation between different version"
    },
    "scene1": {
        "text": "This is the default scene where the user lands when the application is launched first. All of its documentation is <a href='https://rjonmshka.github.io/ar-vr-portfolio/#/project2' target='_blank' >here</a>. Here you can get a decent amount of idea of all the elements that are part of this scene and how to navigate in it.",
        "heading": "Classic Project 2 Scene",
        "imageSrc": "",
        "imageCaption": "Classic Project 3 View",
        "imageAlt": "Classic Project 3 View",
        "subparts": [
            {
                "text": "You can navigate to this scene from any scene by activating the menu and selecting the “Normal View” button with the help of a straight pointer.",
                "heading": "Navigation"
            }
        ],
        "assets": {
            "fromInternet": [],
            "own": [],
            "audios": [],
            "images": [],
            "animations": []
        }
    },
    "scene2": {
        "text": "This is a new addition to the default scene as a part of project 3. Here the whole room (office) setting of Project 2 is scaled down to a level where the user experiences it as a dollhouse (typically of size 2.5 ft x 2.5ft). The whole room is sitting on a table which is a part of an outer room with walls, ceiling. There is enough space in the outer room for the user to navigate around the table. Also, there is an interactable lamp on the table which has a spotlight attached to it. The lamp’s spotlight can be activated while it is grabbed with the help of button “X” or button “A” on the Oculus Quest’s controllers. The spotlight remains ON when the user holds either X or A button. If the user releases the button or ungrabs it, the spotlight will turn OFF. There are also some audios associated with the ON and OFF states of the lamp.<br /> Besides the lamp, there are two action figures placed on the table opposite the side of the lamp. Both the action figures have some animations associated with them. These action figures are also interactable.",
        "heading": "Mego Playset Perspective",
        "imageSrc": "",
        "imageCaption": "Mego Playset Perspective",
        "imageAlt": "Mego Playset Perspective",
        "subparts": [
            {
                "text": "To navigate to this version from the default (classic Project 2 scene) scene or any other scene, the user needs to activate the menu and select the “Mego Playset Perspective” button.",
                "heading": "Navigation"
            },
            {
                "text": "The user can interact with objects like a lamp, ceiling, action figures, and a lot of items inside the dollhouse room. Things like animated avatars, tables, benches, televisions, tv holders, stairs are interaction in this scene. The user can pick them up and place them anywhere in the whole scene. The user can also pick up the action figures on the outer space and space them inside the dollhouse room and animation associated with them will not be affected in any way. The user can take the help of a lamp to shine a light on the small room to look better and see every part of it very clearly. Once, the user has done the desired changes to the dollhouse, the user can put the ceiling back on top of the room in any way. Most of the interactions feel like real objects.",
                "heading": "Interactions"
            },
            {
                "text": "The audios here are scaled to have a low range so that the user can only experience the audios coming from the dollhouse in a certain way. Also, the pitch of audios has been increased so that it would give the user the exact experience as we have scenes in movies where giants are not able to hear sounds of miniature humans or objects properly.",
                "heading": "Audios"
            }
        ],
        "assets": {
            "fromInternet": [
                {
                    "text": "<span class='model-name'>Mechanoid Action Figure Model by “saintpride”:</span> This model is on the interactable objects in this setting. This object also have some animation associated with it. Also, it one of the action figures in this scene.  <a href='https://sketchfab.com/3d-models/mech-work-in-progress-9cf86a320149458586994ddef1e34d54' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": mechanoid,
                        "imageAlt": "Mechanoid Action Figure Model",
                        "caption": "Mechanoid Action Figure Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Low Poly Character (Action figure) Model by “Sebastian Lague”:</span>  This model is on the interactable objects in this setting. This object also have some animation associated with it. Also, it is the second action figure in this scene. <a href='https://sketchfab.com/3d-models/low-poly-character-rigged-b2ca55ab706c4b1ba1c6475d8b3c5bfd' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": lpch,
                        "imageAlt": "Low Poly Character",
                        "caption": "Low Poly Character Model"
                    }
                }
            ],
            "own": [
                {
                    "text": "<span class='model-name'>Lamp Model:</span>  This model is on the interactable objects in this setting. This is a lamp that a light, on-off audio and some functionality associated with it.",
                    "imageData": {
                        "imageSrc": Lamp,
                        "imageAlt": "Lamp",
                        "caption": "Lamp Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Outer Room and Table:</span>  This is the whole outer setting where the project 2 dollhouse resides.",
                    "imageData": {
                        "imageSrc": outerroom,
                        "imageAlt": "Outer Room and Table",
                        "caption": "Outer Room and Table Models"
                    }
                }
            ],
            "audios": [
                {
                    "text": "<span class='model-name'>Lamp On/Off Audio</span> Plays when the lamp is turned on or off. There are two clicks in this audio. This audio is clipped, so that first part is played when lamp is turned on and other part is played when lamp is turned off. <a href='https://www.fesliyanstudios.com/royalty-free-sound-effects-download/light-switch-24' target='_blank'>link</a>",
                }
            ],
            "images": [
                {
                    "text": "<span class='model-name'>Outer Room Floor Texture</span> Texture of Outer Room's floor. <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.es%2Fpin%2F42573158950899020%2F&psig=AOvVaw3cQNOGAZ6MHfaq26NF0P2k&ust=1637891269552000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjCnM6ysvQCFQAAAAAdAAAAABAD' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Outer Room Table Texture</span> Texture of Outer Room table's floor. <a href='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pond5.com%2Fstock-images%2Fphotos%2Ftag%2Fwood-table-texture%2F&psig=AOvVaw1cj3xoRCmobjudF8mFMUsx&ust=1638310085504000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiosejKvvQCFQAAAAAdAAAAABAD' target='_blank'>link</a>",
                }
            ],
            "animations": [
                {
                    "text": "<span class='model-name'>Mechanoid Robot Dancing Animation</span> 'Robot hip-hop' animation from Mixamo. This plays continuosly on Mechanoid action figure 3d model. <a href='https://www.mixamo.com' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Guitar Playing Animation</span> 'Guitar Playing' animation from Mixamo. This plays continuosly on Low Poly Action figure character 3d model. <a href='https://www.mixamo.com' target='_blank'>link</a>",
                }
            ] 
        }
    },
    "scene3": {
        "text": "In this version, the whole environment is scaled up to a level where the height of the user is around 1 foot. The user lands on a table where there are some office items like pencils, ruler, phone, eraser, etc. Some of these objects are interactable. The user can climb up and down this table and other tables that are placed nearby.",
        "heading": "Land of the Giants Perspective",
        "imageSrc": "",
        "imageCaption": "Land of the Giants Perspective",
        "imageAlt": "Land of the Giants Perspective",
        "subparts": [
            {
                "text": "To navigate to this version from the default (classic Project 2 scene) scene or any other scene, the user needs to activate the menu and select the “Land of the Giants Perspective” button. Also, users can use ladders present on all corners of the subject table to climb up or down. The pool stick beside the pool table acts as a ladder for climbing up and down on the pool table. For the table tennis table, the mesh net is extended to the bottom from both ends, user can use to climb up or down on both sides of the table. Finally, the 4th table with files on it can also be climbed up or down with the help of a ladder that is attached to the left side of it.",
                "heading": "Navigation"
            },
            {
                "text": "There are a few of the objects on every table which are interactable. Items on other tables are also interactable like balls and the stick placed on the pool table and ping pong balls and bats on the table tennis table. Also, files on the 4th table are interactable. The mass of their rigid body has been increased so that a small person would feel some weight when throwing them.",
                "heading": "Interactions"
            },
            {
                "text": "The audios around the room and audios coming from the objects nearby are scaled accordingly. Also, the pitch of all the audios is reduced. It makes the experience immersive as a small object moving in this setting will be large for the user’s perspective and will have bashing audio rather than normal audio.",
                "heading": "Audios"
            }
        ],
        "assets": {
            "fromInternet": [
                {
                    "text": "<span class='model-name'>Scissor Model by “prinatable_models”:</span> One of the model on subject table. It is non-interactable.  <a href='https://free3d.com/3d-model/shearsissors-v1--642294.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": scissors,
                        "imageAlt": "Scissor",
                        "caption": "Scissor Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Calculator Model by “prinatable_models”:</span> One of the model on subject table. It is non-interactable.  <a href='https://free3d.com/3d-model/calculator-scientific-v2--791391.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": calculator,
                        "imageAlt": "Calculator",
                        "caption": "Calculator Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Notebook Model by “prinatable_models”:</span> One of the model on subject table. This model is interactable. User can grab it and throw it. It has some rigidbody and colliders associated with it.  <a href='https://free3d.com/3d-model/notebook-v1--925811.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": notebook,
                        "imageAlt": "Notebook",
                        "caption": "Notebook Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Paper Clips Model by “prinatable_models”:</span> Two copies of it are on subject table. This model is interactable. User can grab it and throw it. It has some rigidbody and colliders associated with it.  <a href='https://free3d.com/3d-model/paper-clip-v2--341766.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": paperclips,
                        "imageAlt": "Paper Clips",
                        "caption": "Paper Clips Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Ruler Model by “prinatable_models”:</span> One of the model on subject table.This model is interactable. User can grab it and throw it. It has some rigidbody and colliders associated with it. <a href='https://free3d.com/3d-model/shearsissors-v1--642294.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": ruler,
                        "imageAlt": "Ruler",
                        "caption": "Ruler Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Chorded Phone Model by “prinatable_models”:</span> One of the model on subject table. This model is non-interactable but it does have a ringin audio associated with it. <a href='https://free3d.com/3d-model/-traditional-corded-phone-v1--777709.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": phone,
                        "imageAlt": "Phone",
                        "caption": "Chorded Phone Model"
                    }
                }
            ],
            "own": [
                {
                    "text": "<span class='model-name'>Pencil Model:</span> There are 3 pencils on the subject table. One directly on the table and other two inside pencil holder (pages are interactable). Each pencil model has some audio associated with them and it plays when the pencil collides with the surface of the table. This model have a capsule collider attached to it.",
                    "imageData": {
                        "imageSrc": pencil,
                        "imageAlt": "Pencil",
                        "caption": "Pencil Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pencil/Pen Holder Model:</span> There are two pencils in this model. This model is also interactable and have some colliders associated with it.",
                    "imageData": {
                        "imageSrc": pencilholder,
                        "imageAlt": "Pencil Holder",
                        "caption": "Pencil Holder Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Eraser Model:</span> There is one eraser on the table. This model is also interactable. It does have a collider associated with it.",
                    "imageData": {
                        "imageSrc": eraser,
                        "imageAlt": "Eraser",
                        "caption": "Eraser Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Push Pin Model:</span> There are 2 push pins on the table. Both of them are interactable and have some colliders associated with them.",
                    "imageData": {
                        "imageSrc": pushpins,
                        "imageAlt": "Push Pin",
                        "caption": "Push Pin Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Watch Model:</span> There is a watch on the table which is also interactable and has some colliders associated with it. Also, there is a audio of tick-tock associated with it.",
                    "imageData": {
                        "imageSrc": watch,
                        "imageAlt": "Watch",
                        "caption": "Watch Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Subject Table Model:</span> This is the subject table on which user lands when the scene is loaded.",
                    "imageData": {
                        "imageSrc": subjecttable,
                        "imageAlt": "Subject Table",
                        "caption": "Subject Table Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Table Ladder Model:</span> Climbable ladder to climb up or down the subject table and folder table.",
                    "imageData": {
                        "imageSrc": ladder1,
                        "imageAlt": "Table Ladder",
                        "caption": "Table Ladder Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Pool Stick Ladder Model:</span> This is a climbable pool stick helping user to climb up or down the pool table.",
                    "imageData": {
                        "imageSrc": ladder2,
                        "imageAlt": "Pool Stick Ladder",
                        "caption": "Pool Stick Ladder Model"
                    }
                },
                {
                    "text": "<span class='model-name'>Tennis Mesh Ladder Model:</span> This is a climbable table-tennis mesh net helping user to climb up or down the table tennis table.",
                    "imageData": {
                        "imageSrc": ladder3,
                        "imageAlt": "Tennis Mesh Ladder",
                        "caption": "Tennis Mesh Ladder Model"
                    }
                }
            ],
            "audios": [
                {
                    "text": "<span class='model-name'>Tick-tock Audio</span> Plays on loop with watch model. This audio has a low pitch. <a href='https://freesound.org/people/digifishmusic/sounds/53614/' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Pen Tapping Audio</span> Plays when any pencil hits the table. This audio also has a low pitch. <a href='http://freesoundeffect.net/sound/pen-tapping-sound-effect' target='_blank'>link</a>",
                },
                {
                    "text": "<span class='model-name'>Chorded Phone Ringing Audio</span> Plays continuously through chorded phone model. This audio also has a low pitch. <a href='https://mixkit.co/free-sound-effects/phone-ring/' target='_blank'>link</a>",
                }
            ],
            "images": [
                {
                    "text": "<span class='model-name'>Eraser Texture Image</span> Texture of Eraser Cover. <a href='https://i0.wp.com/erasersworld.com/wp-content/uploads/2019/06/pelikan-eraser-company.png?fit=1200%2C630' target='_blank'>link</a>",
                }
            ],
            "animations": [] 
        }
    },
    "scene4": {
        "text": "Here the whole room is similar to the room in project 2 classic view. However, there are a few differences. There are controls given to the user to turn the whole setup 90 degrees left or right on the z-axis each time user enters the respective input. The room rotates with some amount of speed such that the user experiences things falling and crashing on each other when the room is rotating. Also, a lot of falling items in this setting are interactable so that if the user finds himself/herself under a pile of these objects then he/she would be easily able to escape the debris.",
        "heading": "Dancing on the Ceiling",
        "imageSrc": "",
        "imageCaption": "Dancing on the Ceiling",
        "imageAlt": "Dancing on the Ceiling",
        "subparts": [
            {
                "text": "To navigate to this version from the default (classic Project 2 scene) scene or any other scene, the user needs to activate the menu and select the “Dancing on the Ceiling” button. Here the user is given two additional buttons on the menu “Rotate Left” and “Rotate Right” which do the exact function as their name states on the z-axis of the room. The correct way of knowing the rotation axis is rotating while facing the exit door of the room.",
                "heading": "Navigation"
            },
            {
                "text": "All of the interactable objects from project 2’s classic view, as well as some of the objects like tables, television, avatars, meeting chairs, are also interactable and they also fall when the user changes the rotation of the environment.",
                "heading": "Interactions"
            },
            {
                "text": "The audios are kept the same as for project 2’s classic view as there is no scaling of the environment.",
                "heading": "Audios"
            }
        ],
        "assets": {
            "fromInternet": [],
            "own": [],
            "audios": [],
            "images": [],
            "animations": [] 
        }
    },
    "scene5": {
        "text": "In this setting, the user’s virtual body and other interactable objects do not have any gravity associated with them. So, initially, when the user lands in the scene, the user’s body is levitated in space above the floor of the room.",
        "heading": "Zero Gravity",
        "imageSrc": "",
        "imageCaption": "Zero Gravity",
        "imageAlt": "Zero Gravity",
        "subparts": [
            {
                "text": "To navigate to this version from the default (classic Project 2 scene) scene or any other scene, the user needs to activate the menu and select the “Zero Gravity” button.  The right controller is replaced by a Fire Extinguisher and the user can use the first button “A” on the right controller to emit gas from the fire extinguisher which helps the user navigate in zero-gravity.",
                "heading": "Navigation"
            },
            {
                "text": "The interactable object that is part of project 2’s classic view can interact here also. Additionally, all of these objects don’t have any gravity associated with them. So, if the user grabs and throws them with some speed, they will keep moving in that direction, bounce from other objects are keep levitating till the forces are balanced.",
                "heading": "Interactions"
            },
            {
                "text": "The audios are kept the same as for project 2’s classic view as there is no scaling of the environment.",
                "heading": "Audios"
            }
        ],
        "assets": {
            "fromInternet": [
                {
                    "text": "<span class='model-name'>Fire Extinguisher Model by “bananacake”:</span> This model emits particles and adds force to user's pseudo body in the direction opposite to its emission. It helps user navigate in zer gravity. It is part of user's right controller. <a href='https://free3d.com/3d-model/fire-extinguisher-785436.html' target='_blank'>link</a>",
                    "imageData": {
                        "imageSrc": fireext,
                        "imageAlt": "Fire Extinguisher",
                        "caption": "Fire Extinguisher Model"
                    }
                }
            ],
            "own": [],
            "audios": [
                {
                    "text": "<span class='model-name'>Fire Extinguisher Audio</span> Plays user presses 'A' button on right controller. This audio is cropped into two parts. The first part keeps playing on loop while user has pressed button. The second part plays only once when user releases the controller's button. <a href='https://www.videvo.net/sound-effect/fire-extinguisher-15/419626/' target='_blank'>link</a>",
                }
            ],
            "images": [
                {
                    "text": "<span class='model-name'>Smoke Texture Image</span> Texture for particle system for replicating gas emitting from fire extinguisher. <a href='http://johnstejskal.com/wp/how-to-create-realistic-smoke-in-unity/' target='_blank'>link</a>",
                }
            ],
            "animations": [
                {
                    "text": "<span class='model-name'>Paricle System</span> Plays user presses 'A' button on right controller in this setting. This particle system uses texture image from the above section.",
                }
            ] 
        }
    }
};

export default p3Data;