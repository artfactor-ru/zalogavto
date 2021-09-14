window.addEventListener("DOMContentLoaded", () => {
    let range1 = new RollCounterRange("#range1"),
        range2 = new RollCounterRange("#range2");
});

class RollCounterRange {
    constructor(id) {
        this.el = document.querySelector(id);
        // this.srValue = null;
        this.fill = null;
        this.valueContainer = document.querySelector('[data-for="' + id + '"]');
        // this.digitCols = null;
        // this.lastDigits = "";
        // this.rollDuration = 0; // the transition duration from CSS will override this
        // this.trans09 = false;



        if (this.el) {
            this.buildSlider();
            this.el.addEventListener("input", this.changeValue.bind(this));
        }
    }
    buildSlider() {
        // create a div to contain the <input>
        let rangeWrap = document.createElement("div");
        rangeWrap.className = "range";
        this.el.parentElement.insertBefore(rangeWrap, this.el);

        // create another div to contain the <input> and fill
        let rangeInput = document.createElement("span");
        rangeInput.className = "range__input";
        rangeWrap.appendChild(rangeInput);

        // range fill, place the <input> and fill inside container <span>
        let rangeFill = document.createElement("span");
        rangeFill.className = "range__input-fill";
        rangeInput.appendChild(this.el);
        rangeInput.appendChild(rangeFill);




        this.fill = rangeFill;


        this.changeValue();


    }
    changeValue() {



        this.valueContainer.textContent = new Intl.NumberFormat('ru-RU').format(this.el.value);





        let credit = document.querySelector("#range1").value;
        let mounths = document.querySelector("#range2").value;

        let sumpay = Math.round(credit * 0.02);
        // console.log(mounths / credit);

        document.querySelectorAll('input[name=zaim]').forEach(element => {
            element.value = credit + 'p.';
        });
        document.querySelectorAll('input[name=mounth]').forEach(element => {
            element.value = mounths;
        });
        document.querySelectorAll('input[name=sum]').forEach(element => {
            element.value = new Intl.NumberFormat('ru-RU').format(sumpay) + 'p.';
        });
        let sumpayContainer = document.querySelector('#sumpay').textContent = new Intl.NumberFormat('ru-RU').format(sumpay);
    }
}


// Валидация телефона



function telValidation() {

    function InputMask(options) {
        this.el = this.getElement(options.selector);
        if (!this.el) return console.log('Что-то не так с селектором');
        this.layout = options.layout || '+7 (___) ___-__-__';
        this.maskreg = this.getRegexp();

        this.setListeners();
    }

    InputMask.prototype.getRegexp = function() {
        let str = this.layout.replace(/_/g, '\\d')
        str = str.replace(/\(/g, '\\(')
        str = str.replace(/\)/g, '\\)')
        str = str.replace(/\+/g, '\\+')
        str = str.replace(/\s/g, '\\s')

        return str;
    }

    InputMask.prototype.mask = function(e) {
        let _this = e.target,
            matrix = this.layout,
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = _this.value.replace(/\D/g, "");

        if (def.length >= val.length) val = def;

        _this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });

        if (e.type == "blur") {
            var regexp = new RegExp(this.maskreg);
            if (!regexp.test(_this.value)) _this.value = "";
        } else {
            this.setCursorPosition(_this.value.length, _this);
        }
    }

    InputMask.prototype.setCursorPosition = function(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    InputMask.prototype.setListeners = function() {
        this.el.addEventListener("input", this.mask.bind(this), false);
        this.el.addEventListener("focus", this.mask.bind(this), false);
        this.el.addEventListener("blur", this.mask.bind(this), false);
        this.el.addEventListener('keyup', function(evt) {
            let length = this.value.length
            if (length < 18) {
                this.style.border = "1px solid #de4145";

            } else {
                this.style.border = " 1px solid #3A4047";
            }
        });
    }

    InputMask.prototype.getElement = function(selector) {
        if (selector === undefined) return false;
        if (this.isElement(selector)) return selector;
        if (typeof selector == 'string') {
            var el = document.querySelector(selector);
            if (this.isElement(el)) return el;
        }
        return false
    }

    InputMask.prototype.isElement = function(element) {
        return element instanceof Element || element instanceof HTMLDocument;
    }



    let inputs = document.querySelectorAll('input[type="tel"]');

    Array.prototype.forEach.call(inputs, function(input) {
        new InputMask({
            selector: input, // в качестве селектора может быть элемент, или, собственно css селектор('#input', '.input', 'input'). Если селектор - тег или класс - будет получен только первый элемент
            layout: input.dataset.mask
        })
    })
}


telValidation();