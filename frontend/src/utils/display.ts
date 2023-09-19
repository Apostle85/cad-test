import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { ComputingConeResult } from '../components/App/App';

class Display {
    _scene;
    _camera;
    _renderer;
    canvasElement: HTMLCanvasElement;
    constructor({ canvasId, }: { canvasId: string }) {
        this.canvasElement = document.querySelector(`#${canvasId}`) as HTMLCanvasElement;
        this._scene = new THREE.Scene();
        const light = new THREE.AmbientLight('#fff');
        const pointLight = new THREE.PointLight('#fff');
        this._scene.add(light);
        this._scene.add(pointLight);
        this._camera = new THREE.PerspectiveCamera(75, 640 / 480, 0.1, 1000);
        this._renderer = new THREE.WebGLRenderer({ canvas: this.canvasElement });
        this._renderer.setSize(640, 480);
        this._camera.position.set(0, 2, 5);
    }
    display({ vertices, }: { vertices: ComputingConeResult }) {
        console.log(vertices);
        const [points, indices, magnitudes] = vertices ?? [[0], [0], [0]];
        const orbit = new OrbitControls(this._camera, this.canvasElement);
        const arrowHelper = new THREE.AxesHelper(2);
        const animate = () => {
            requestAnimationFrame(animate);
            orbit.update();
            this._renderer.render(this._scene, this._camera);
        }
        const geometry = new THREE.BufferGeometry();
        const maxPoint = Math.max(...points);
        const positions = points.map((p) => p / maxPoint);
        geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(new Float32Array(positions), 3)
        );
        geometry.setAttribute(
            'normal',
            new THREE.BufferAttribute(new Float32Array(magnitudes), 3)
        );
        geometry.setIndex(indices);
        geometry.computeVertexNormals();
        const material = new THREE.MeshBasicMaterial({
            color: '#c4c4c4',
        });
        const materialFrame = new THREE.MeshBasicMaterial({
            color: '#000',
            wireframe: true,
        });
        if (vertices) {
            const mesh = new THREE.Mesh(geometry, material);
            const meshFrame = new THREE.Mesh(geometry, materialFrame);
            this._scene.add(mesh);
            this._scene.add(meshFrame);
            this._scene.add(arrowHelper);
            animate();
        }
    }
}

export default Display;