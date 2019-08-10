var level00 = function () {
    var scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color3(0, 0, 0);
    
    var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);

    var faceColors = new Array(6);
    faceColors[1] = new BABYLON.Color4(0.4,0.4,1,1);   // blue front
    faceColors[2] = new BABYLON.Color4(0.4,1,0.5,1);   // green right 
    faceColors[3] = new BABYLON.Color4(1,0.4,0.4,1);   // red left
    faceColors[4] = new BABYLON.Color4(0.6,0.4,1,1);   // pruple top
    faceColors[5] = new BABYLON.Color4(1,1,0.4,1);   // yellow bottom
    faceColors[0] = new BABYLON.Color4(1,0.6,0.4,1);   // orange back

    var options = {
        width: 2,
        height: 2,
        depth: 2,
        faceColors: faceColors
    };


    var box = BABYLON.MeshBuilder.CreateBox("box",options, scene);
    box.rotation.x = -0.3;
    box.rotation.y = -0.4;

    var spriteManagerPlayer = new BABYLON.SpriteManager("playerManager","Assets/1.png", 2, {width: 1, height: 1}, scene);
    var player = new BABYLON.Sprite("player", spriteManagerPlayer);
    player.size = 0.12;
    player.position.y = 3;
    player.position.x = 2;
    player.position.z = -1.8;
    

    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 0, -10), scene);
    light.intensity = 1;

    var inputMap ={};
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";

    }));
    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
        inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
    }));

    var leftSide = -5.0
    var rightSide = 5.0
    var topSide = 3.0
    var bottomSide = -3.0

    scene.onBeforeRenderObservable.add(()=>{
        
        if(inputMap["ArrowUp"]){
            box.rotate(BABYLON.Axis.X, 0.05, BABYLON.Space.WORLD);
            if (player.position.y < topSide){
                player.position.y+=0.05
            }
        } 

        if(inputMap["ArrowLeft"]){
            box.rotate(BABYLON.Axis.Y, 0.05, BABYLON.Space.WORLD);
            if (player.position.x > leftSide){
                player.position.x-=0.05
            }
        } 
        if(inputMap["ArrowDown"]){
            box.rotate(BABYLON.Axis.X, -0.05, BABYLON.Space.WORLD);
            if (player.position.y > bottomSide){
                player.position.y-=0.05
            }
        } 
        if(inputMap["ArrowRight"]){
            box.rotate(BABYLON.Axis.Y, -0.05, BABYLON.Space.WORLD);
            if (player.position.x < rightSide){
                player.position.x+=0.05
            }
        }
        if(inputMap["Enter"]) {
            if ( (player.position.x > -1.0 && player.position.x < 1.0) && (player.position.y > -1.0 && player.position.y < 1.0) ){
                console.log("Pressing Enter Key")
            }
        }    
        //console.log(engine.getFps())
    
    })

    return scene;
}