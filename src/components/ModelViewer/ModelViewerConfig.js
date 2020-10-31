Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var THREE = require('three');
var OrbitControls = require('three/examples/jsm/controls/OrbitControls');
var STLLoader = require('three/examples/jsm/loaders/STLLoader');
var OBJLoader = require('three/examples/jsm/loaders/OBJLoader');
var material;

/**
 * Absolute imports
 */
var isMesh = function (object) { return object.isMesh; };
var isGroup = function (object) { return object.isGroup; };
var isObject3D = function (object) {
    return object.isObject3D;
};
/**
 * Get camera position to fit model in viewer
 */
var getCameraPositionToFitModel = function (model) {
    var boundingBox = getBoundingBox(model);
    var boundingSphere = getBoundingSphere(model);
    var modelCenter = getBoundingBoxCenter(model);
    var modelSize = getBoundingBoxSize(model);
    var cameraX = modelCenter.x;
    var cameraY = Math.sqrt(3) * boundingSphere.radius + boundingSphere.center.y;
    var cameraZ = boundingBox.max.z + modelSize.y;
    return new THREE.Vector3(cameraX, cameraY - 30, cameraZ - 30);
};
/**
 * Get bounding box of model or [[-1,-1,-1],[1,1,1]] if no model
 */
var getBoundingBox = function (model) {
    if (isMesh(model)) {
        model.geometry.computeBoundingBox();
        return model.geometry.boundingBox;
    }
    if (isGroup(model) || isObject3D(model)) {
        return new THREE.Box3().setFromObject(model);
    }
    return new THREE.Box3(new THREE.Vector3(-1, -1, -1), new THREE.Vector3(1, 1, 1));
};
/**
 * Get bounding sphere of model
 */
var getBoundingSphere = function (model) {
    var boundingBox = getBoundingBox(model);
    var boundingSphere = new THREE.Sphere();
    boundingBox.getBoundingSphere(boundingSphere);
    return boundingSphere;
};
/**
 * Get size of model
 */
var getBoundingBoxSize = function (model) {
    var boundingBox = getBoundingBox(model);
    var size = new THREE.Vector3();
    boundingBox.getSize(size);
    return size;
};
/**
 * Get center of model
 */
var getBoundingBoxCenter = function (model) {
    var boundingBox = getBoundingBox(model);
    var center = new THREE.Vector3();
    boundingBox.getCenter(center);
    return center;
};

/**
 * Absolute imports
 */
/**
 * initialize THREE.js Scene
 */
// export const createScene = () => {
//   const scene = new THREE.Scene();
//   return scene;
// };
/**
 * initialize Three.js Perspective Camera
 */
var createCamera = function (aspect) {
    var camera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000000);
    camera.position.set(5, 5, 5);
    camera.up = new THREE.Vector3(0, 0, 1);
    return camera;
};
/**
 * initialize THREE.js Renderer
 */
var createRenderer = function (width, height, canvas) {
    var renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        canvas: canvas || undefined,
    });
    renderer.setSize(width, height, false);
    return renderer;
};
/**
 * initialize Three.js Cameras Controls
 */
var createCameraControls = function (camera, renderer) {
    var autoRotateDefaultSpeed = 5.0;
    var cameraControls = new OrbitControls.OrbitControls(camera, renderer.domElement);
    cameraControls.autoRotateSpeed = autoRotateDefaultSpeed;
    cameraControls.enableKeys = false;
    cameraControls.update();
    return cameraControls;
};
/**
 * initialize Light from Camera
 */
var createCameraLight = function () {
    var cameraLight = new THREE.PointLight(0xffffff, 0.7, 0);
    return cameraLight;
};
/**
 * Update Camera size
 */
var updateCameraSize = function (camera, width, height) {
    // eslint-disable-next-line no-param-reassign
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
};
/**
 * Update Renderer size
 * @private
 */
var updateRendererSize = function (renderer, width, height) {
    renderer.setSize(width, height);
};
/**
 * Set Camera Target
 */
var setCameraTarget = function (cameraControls, target) {
    cameraControls.target.copy(target);
    cameraControls.update();
};
/**
 * Set Camera Position
 */
var setCameraPosition = function (camera, position) {
    camera.position.copy(position);
    // camera.updateProjectionMatrix();
};
var createScene = function (_a) {
    var placeholder = _a.placeholder;
    var width = placeholder ? placeholder.clientWidth : 0;
    var height = placeholder ? placeholder.clientHeight : 0;
    var scene = new THREE.Scene();
    var models = [];
    var camera = createCamera(width / height);
    var renderer = createRenderer(width, height, placeholder);
    renderer.setSize(width, height, false);
    var cameraControls = createCameraControls(camera, renderer);
    var cameraLight = createCameraLight();
    scene.add(camera);
    camera.add(cameraLight);
    cameraControls.update();
    /**
     * Clear Scene
     */
    var clearScene = function () {
        models.forEach(function (model) {
            scene.remove(model);
        });
        models = [];
        // renderer.dispose();
        // scene.traverse((object) => {
        //   if (!isMesh(object)) return;
        //   console.log('dispose geometry!');
        //   object.geometry.dispose();
        //   // if (object.material.isMaterial) {
        //   //   cleanMaterial(object.material);
        //   // } else {
        //   //   // an array of materials
        //   //   for (const material of object.material) cleanMaterial(material);
        //   // }
        // });
    };
    /**
     * render frame of current scene
     */
    var render = function () {
        renderer.render(scene, camera);
    };
    /**
     * Force Camera and Renderer size update
     */
    var resize = function () {
        // const { clientWidth, clientHeight } = placeholder;
        updateCameraSize(camera, width, height);
        updateRendererSize(renderer, width, height);
    };
    /**
     * Add Objects to scene
     */
    var add = function (object) {
        models.push(object);
        scene.add(object);
    };
    /**
     * const animate
     */
    var animate = function () {
        render();
        cameraControls.update();
    };
    /**
     * Start render animation loop
     */
    var animationLoop = function () {
        animate();
        requestAnimationFrame(animationLoop);
    };
    /**
     * Updates the camera projection matrix. Must be called after change of parameters.
     */
    var updateCameraMatrix = function () {
        camera.updateProjectionMatrix();
    };
    /**
     * Focus camera at object center
     */
    var cameraFocusObject = function (object) {
        var center = getBoundingBoxCenter(object);
        setCameraTarget(cameraControls, center);
        updateCameraMatrix();
    };
    /**
     * Fit Object to camera view
     */
    var fitObjectToView = function (object) {
        var position = getCameraPositionToFitModel(object);
        setCameraPosition(camera, position);
        updateCameraMatrix();
    };
    // TODO: Run animation loop ???
    animationLoop();
    return {
        scene: scene,
        render: render,
        add: add,
        resize: resize,
        animate: animate,
        cameraFocusObject: cameraFocusObject,
        fitObjectToView: fitObjectToView,
        clearScene: clearScene,
    };
};

var createPromise = function () {
    var resolve;
    var reject;
    var promise = new Promise(function (promiseResolve, promiseReject) {
        resolve = promiseResolve;
        reject = promiseReject;
    });
    return { promise: promise, resolve: resolve, reject: reject };
};

/**
 * Utils
 */
var loadFile = function (file) {
    var reader = new FileReader();
    var readerPromise = createPromise();
    reader.addEventListener('error', function () {
        // = new Error(`Error while reading File ${file.name}`)
        var error = reader.error || new Error("Error while reading File " + file.name);
        readerPromise.reject(error);
    });
    reader.addEventListener('load', function () {
        var data = reader.result;
        // const fileObject = new FileObject(file, data);
        readerPromise.resolve(data);
    }, false);
    // reader.readAsText(file);
    reader.readAsArrayBuffer(file);
    return Promise.resolve([
        readerPromise.promise,
        function (reason) { return abort(reader, readerPromise, reason); },
    ]);
};
var abort = function (reader, promise, reason) {
    reader.abort();
    promise.reject(reason);
};

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var createDefaultMaterialColor = function () { return new THREE.Color('#808080'); };
var createDefaultMaterial = function (options) {
    var defaultOptions = { color: createDefaultMaterialColor() };
    // options = Object.assign({}, defaultOptions, options);
    return new THREE.MeshPhongMaterial(__assign(__assign({}, options), defaultOptions));
};

/**
 * Absolute imports
 */
var parseStl = function (file) {
    var loader = new STLLoader.STLLoader();
    var geometry = loader.parse(file);
    material = createDefaultMaterial();
    var mesh = new THREE.Mesh(geometry, material);
    return mesh;
};

/**
 * Utils
 */
var createViewer = function (config) {
    //Scenes allow you to set up what and where is to be rendered by three.js. This is where you place objects, lights and cameras.
    //Le pasa el div <canvas /> a createScene para crear la escena para renderizar el modelo.
    var scene = createScene({ placeholder: config.placeholder });

    var load = function (file) {
        return loadFile(file)
            .then(function (_a) {
            var fileDataPromise = _a[0];
            return fileDataPromise;
        })
            .then(parseStl)
            .then(function (model) {
            scene.clearScene();
            scene.add(model);
            scene.fitObjectToView(model);
            scene.cameraFocusObject(model);
        });
    };

    var clearScene = function () {
        scene.clearScene();
    };
    return { load: load, clearScene: clearScene };
};

/**
 * Absolute imports
 */
var useViewer = function () {
    var testViewer = React.useRef();
    var placeholderRef = React.useRef(null);
    var setRef = function (el) {
        placeholderRef.current = el;
    };
    React.useEffect(function () {
        testViewer.current = createViewer({
            placeholder: placeholderRef.current,
        });
    }, []);
    var load = function (file) {
        if (!testViewer.current)
            return;
        testViewer.current.load(file);
    };
    var clearScene = function () {
        if (!testViewer.current)
            return;
        testViewer.current.clearScene();
    };
    var userSettings = function(hex) {
        //Configurar el material segun el input del usuario.
        material.color = new THREE.Color(hex);
    }
    
    return [
        setRef,
        {
            load: load,
            userSettings: userSettings,
            clearScene: clearScene,
        },
    ];
};

exports.useViewer = useViewer;
//# sourceMappingURL=index.js.map
