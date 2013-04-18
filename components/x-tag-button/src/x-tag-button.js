xtag.register('x-button', {
    lifecycle: {
        created: function() {
            this.innerHTML = this.dataset.label;
        }
    },
    events: {
        click: function() {
            window.open(this.dataset.url);
        }
    }
});