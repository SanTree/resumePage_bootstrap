$(function () {
    /*出生日期选择开始*/
    $.ms_DatePicker({
        YearSelector: "#test1",
        MonthSelector: "#test2",
        DaySelector: "#test3"
    });
    $.ms_DatePicker();
    /*出生日期选择结束*/
});





/*图片上传开始*/
var input1 = document.getElementById("upload");
if(typeof FileReader==='undefined'){
    input1.setAttribute('disabled','disabled');
}else{
    input1.addEventListener('change',readFile,false);

}
function readFile(){
    var file = this.files[0];//获取上传文件列表中第一个文件
    if(!/image\/\w+/.test(file.type)){

        alert("文件必须为图片！");
        return false;
    }
    var reader = new FileReader();//实例一个文件对象
    reader.readAsDataURL(file);//把上传的文件转换成url
    //当文件读取成功便可以调取上传的接口
    reader.onload = function(e){


        var image = new Image();
        // 设置src属性
        image.src = e.target.result;
        var max=200;
        // 绑定load事件处理器，加载完成后执行，避免同步问题
        image.onload = function(){
            // 获取 canvas DOM 对象
            var canvas = document.getElementById("cvs");
            // 如果高度超标 宽度等比例缩放 *=
            /*if(image.height > max) {
                image.width *= max / image.height;
                image.height = max;
            } */
            // 获取 canvas的 2d 环境对象,
            var ctx = canvas.getContext("2d");
            // canvas清屏
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            // 重置canvas宽高
            /*canvas.width = image.width;
            canvas.height = image.height;
            if (canvas.width>max) {canvas.width = max;}*/
            // 将图像绘制到canvas上
            // ctx.drawImage(image, 0, 0, image.width, image.height);
            ctx.drawImage(image, 0, 0, 200, 200);
            // 注意，此时image没有加入到dom之中
        };
    }
};
/*图片上传结束*/