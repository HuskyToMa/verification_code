const allCode = "0123456789ABCDEFJHIJKLMNOPQRSTUVWXYZ";

export default class vCode {

    constructor({ el = 'v-code' , codeLength = 4 }){

        this.code = '';
        this.codeLength = codeLength;
        this.el = document.getElementById(el);
        this.canvas = document.createElement('canvas');
        this.ctx = null;
        this.init();
    }

    init = () => {
        // 渲染canvas入界面
        this.canvas.setAttribute('id','v-code-c');
        this.el.appendChild(this.canvas);
        this.canvas = document.getElementById('v-code-c');
        this.ctx = this.canvas.getContext('2d');
        // 更新canvas渲染内容
        this.setBox();
        this.updateCode();
        this.canvas.addEventListener( 'click' , this.updateCode );
        
    }

    updateCode = () => {

        this.code = '';
        let allCodeLength = allCode.length - 1;
        for( let i = 0 ; i < this.codeLength ; i++ ){
            this.code += allCode.charAt( Math.round( Math.random() * allCodeLength ) );
        }
        this.drawCode();
    }

    setBox =  () => {

        this.canvas.setAttribute('width' , `${ ( this.codeLength + 1 ) * 20 }`);// 增加一个字的空余位置
        this.canvas.setAttribute('height' , '40');

    }

    drawCode = () => {

        this.ctx.clearRect( 0 , 0 , this.canvas.width , this.canvas.height );

        this.ctx.font="20px Verdana";
        // 创建渐变
        let gradient=this.ctx.createLinearGradient(0,0,this.canvas.width,0);
        gradient.addColorStop("0","magenta");
        gradient.addColorStop("0.5","blue");
        gradient.addColorStop("1.0","red");
        // 用渐变填色
        this.ctx.fillStyle=gradient;
        this.ctx.fillText(this.code , 20 , 30);
        
    }

}