var blenderTest = function () {

    // Create the scene
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
    var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

    // Add and manipulate meshes in the scene
    //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);


    // Use the imported Blender Mesh
    // The first parameter can be used to specify which mesh to import. Here we import all meshes
    BABYLON.SceneLoader.ImportMesh("", "", "mesh.babylon", scene, function (newMeshes) {
        var blenderMesh = newMeshes[0];
        camera.target = blenderMesh;
        var decalMaterial = new BABYLON.StandardMaterial("decalMat", scene);
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 300, height:15}, scene);
        ground.material = decalMaterial;	
    });	

    return scene;
};