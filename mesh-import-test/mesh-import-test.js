function level01 () {
    
    var scene = new BABYLON.Scene(engine);

    BABYLON.SceneLoader.Load("", "test.babylon", engine, function (newScene) {
        var scene = newScene;
        console.log(scene)
        //var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 10, new BABYLON.Vector3(0,0,0), scene);
        //var camera = scene.activecamera;
        //camera.setTarget(BABYLON.Vector3.Zero());
        //camera.attachControl(canvas, true);
            
        var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
        var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

        scene.executeWhenReady( function() {
            engine.runRenderLoop( function() {
                scene.render();
            });
        });
    });
}