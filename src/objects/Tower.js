
export default class Tower extends Phaser.Physics.Arcade.Image {

    constructor(scene) {
        super(scene, 800, 480, "some");
        this.scale = 1;
        this.alpha = 1;


        scene.add.existing(this);
        scene.physics.add.existing(this);

    }
}
