/*
* Daves web component
*/

xtag.register('x-helloworld', {
    lifecycle: {
        created: function() {
            this.value = 'Hello World!';
        }
    }
});