import Phaser from "phaser";
import axios from "axios";

export default class Talk extends Phaser.Physics.Arcade.Image {

    constructor(scene) {
        super(scene, 450, 450, "talk");
        this.scale = 1;
        this.alpha = 1;

        this.t_content = scene.add.text(-500,-500,"def").setVisible(false)

        scene.add.existing(this);
        this.setInteractive();
        //scene.input.setDraggable(this)
        //this.on('pointerup', this.popup, scene);


        this.on('pointerdown', function(pointer) {
            scene.viewTalk(this.t_content.text)

            //console.log(talkView.getChildByName('title').innerHTML);

            //console.log(talkView.getChildByName('title').value)
            //talkView.getChildByName('content').value = "chagned";


            /***
            let board = scene.add.sprite(scene.m_player.getCenter().x, scene.m_player.getCenter().y, "board");
            // this.m_canMove = false;

            let graphics = scene.make.graphics();

            // graphics.fillStyle(0xffffff);
            graphics.fillRect(board.getTopLeft().x, board.getTopLeft().y, 150, 150);

            var mask = new Phaser.Display.Masks.GeometryMask(scene.scene, graphics);

            var text = scene.add.text(board.getTopLeft().x+10, board.getTopLeft().y+10, "default", { fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 205 } }).setOrigin(0);

            axios.post('http://localhost:7777/marker/read' ,{
                "id" : 18,
                "type" : "Talk"
            },{
                withCredentials: true,
            }).then(res => {
                text.setText(JSON.parse(JSON.stringify(res.data)).contents)
            }).catch(error => {
                console.log(this.t_content.text)
            })

            text.setMask(mask);

            //  The rectangle they can 'drag' within
            var zone = scene.add.zone(board.getTopLeft().x, board.getTopLeft().y, 150, 150).setOrigin(0).setInteractive();
            ***/
        });
    }

   // popup(){
   //     //console.log(this.t_content.text)
   //     let board = scene.add.sprite(this.m_player.getCenter().x, this.m_player.getCenter().y, "board");
   //    // this.m_canMove = false;
   //     /***
   //      let text = this.add.text(board.getTopLeft().x, board.getTopLeft().y, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa").setOrigin(0);
   //      let graphics = this.make.graphics();
   //      graphics.fillRect(this.m_player.getCenter().x, this.m_player.getCenter().y, 205, 141);
   //      let mask = new Phaser.Display.Masks.GeometryMask(this, graphics);
   //      text.setMask(mask);
   //      //let zone = this.add.zone(board.getTopLeft(), board.getTopLeft(), 205, 141).setOrigin(0).setInteractive();
//
   //      this.m_container = this.add.container(board.x, board.y)
   //      this.m_container.content = container.scene.add.text(
   //      container.x - container.width / 2,
   //      container.y - container.height / 2,
   //      "", container.defaultStyles
   //      )
   //      ***/
//
   //     let graphics = this.make.graphics();
//
   //     // graphics.fillStyle(0xffffff);
   //     graphics.fillRect(board.getTopLeft().x, board.getTopLeft().y, 150, 150);
//
   //     var mask = new Phaser.Display.Masks.GeometryMask(this.scene, graphics);
//
   //     var text = this.add.text(board.getTopLeft().x+10, board.getTopLeft().y+10, "default", { fontFamily: 'Arial', color: '#00ff00', wordWrap: { width: 205 } }).setOrigin(0);
//
   //     axios.post('http://localhost:7777/marker/read' ,{
   //         "id" : 12,
   //         "type" : "Talk"
   //     },{
   //         withCredentials: true,
   //     }).then(res => {
   //         text.setText(JSON.parse(JSON.stringify(res.data)).contents)
   //     }).catch(error => {
   //         console.log(name)
   //     })
//
   //     text.setMask(mask);
//
   //     //  The rectangle they can 'drag' within
   //     var zone = this.add.zone(board.getTopLeft().x, board.getTopLeft().y, 150, 150).setOrigin(0).setInteractive();
   // }
}
