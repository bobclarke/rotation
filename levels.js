    class levels {

        constructor(a) {
            this.a = a
        }

        level02 () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
            camera.attachControl(canvas, true);

            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);

            //return scene;
            scene.render()
            return this;
        }

        level03 () {
            var scene = new BABYLON.Scene(engine);

            var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,0,5), scene);
            camera.attachControl(canvas, true);

            var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
            var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

            var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:5}, scene);

            //return scene;

            scene.render()
            return this;
        }
    }
