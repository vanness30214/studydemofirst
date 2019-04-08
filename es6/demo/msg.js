(function (window,document) {
    let Msg =function (options){
        this._init(options);
    };
    Msg.prototype._init =function({content = ''}){
        this.content =content;
        this._createElement();
        this._show(this._el);
    };
    Msg.prototype._createElement =function (){
        let wrap = document.createElement('div');
        wrap.className ='msg_wrap';
        wrap.innerHTML ='  <div class="msg__wrap">\n' +
            '    <div class="msg-header">\n' +
            '      <span>确认删除</span>\n' +
            '      <span class="msg-header-close-button">×</span>\n' +
            '    </div>\n' +
            '    <div class="msg-body">\n' +
            '      <div class="msg-body-icon">\n' +
            '        <div class="msg-body-icon-wrong"></div>\n' +
            '      </div>\n' +
            '      <div class="msg-body-content">是否删除</div>\n' +
            '    </div>\n' +
            '    <div class="msg-footer">\n' +
            '      <button class="msg-footer-btn msg-footer-cancel-button">算了吧</button>\n' +
            '      <button class="msg-footer-btn msg-footer-confirm-button">好的</button>\n' +
            '    </div>\n' +
            '  </div>'

            this._el =wrap;
        Msg.prototype._show=function (el) {
            document.body.appendChild(el)
        }
    };
    window.$Msg=Msg
})(window,document);