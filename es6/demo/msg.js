(function (window, document) {

    let Msg = function (options) {
        this._init(options);
    };
    Msg.prototype._init = function ({content = ''}) {
        this.content = content;
        this._createElement();
        this._show([this._el, this._overlay]);
        this._bind([this._el, this._overlay]);
    };
    Msg.prototype._createElement = function () {
        let wrap = document.createElement('div');
        wrap.className = 'msg__wrap';
        wrap.innerHTML =
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
            '    </div>';
        let overlay = document.createElement('div');
        overlay.className = "msg__overlay";
        this._overlay = overlay;
        this._el = wrap;


    };
    Msg.prototype._bind = function ([el, overlay]) {
        const hideMsg = function () {
            el.style.transform = 'translate(-50%, -50%) scale(0, 0)';
            overlay.style.opacity = '0';
            setTimeout(function () {
                document.body.removeChild(el);
                document.body.removeChild(overlay);
            },300);
        };
        const cancel = function (e) {
            hideMsg();
        };
        const confirm = function (e) {
            hideMsg();
        };
        overlay.addEventListener('click', cancel);
        el.querySelector('.msg-header .msg-header-close-button').addEventListener('click', cancel);
        el.querySelector('.msg-footer .msg-footer-cancel-button').addEventListener('click', cancel);
        el.querySelector('.msg-footer .msg-footer-confirm-button').addEventListener('click', confirm);
    };
    Msg.prototype._show = function ([el, overlay]) {
        document.body.appendChild(el);
        document.body.appendChild(overlay);
        setTimeout(function () {
            el.style.transform = 'translate(-50%, -50%) scale(1, 1)';
            overlay.style.opacity = '1';
        })

    };
    window.$Msg = Msg
})(window, document);


