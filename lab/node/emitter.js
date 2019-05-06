function Emitter(){
    this.events = {};
}


Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}
// Event Listener: The code that responds to an event.

Emitter.prototype.emit = function(type){
    if(this.events[type]){
        this.events[type].forEach( function(listener){
            listener();
        });
    }
}

module.exports = Emitter;
