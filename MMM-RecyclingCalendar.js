Module.register("MMM-RecyclingCalendar", {
    
  defaults: {
        foo: "I'm alive!",
        zipCode: 8047, 
        daysToDisplay: 7,  
        url: "http://openerz.metaodi.ch/api/calendar.json",
      },

  getStyles: function () {
    return ["MMM-RecyclingCalendar.css"];
  },  
    
  start: function (){ // is executed when module is loaded successfully 
        Log.info('Starting module: ' + this.name);

        // this.test = "aus ";

        this.calendarData = [];

        
        this.getTestFunction();


        // this.count = 0
        // var timer = setInterval(()=>{
        //   this.updateDom()
        //   this.count++
        // }, 1000)
      },

      getTestFunction: function(){
        this.sendSocketNotification('CALENDAR_GET', this.config);
      },
      
      notificationReceived: function(notification, payload, sender) {
        if (sender) {
          Log.log(this.name + " received a module notification: " + notification + " from sender: " + sender.name);
        } else {
          Log.log(this.name + " received a system notification: " + notification);
        }

        
        // switch(notification) {
        //   case "DOM_OBJECTS_CREATED":
        //     var timer = setInterval(()=>{
        //       this.sendSocketNotification("MMM-RECYCLINGCALENDAR-CONFIG", this.count)
        //       this.count++
        //     }, 1000)
        //     break
        // }
      },

      socketNotificationReceived: function(notification, payload) {
        Log.log(this.name + " received a socket notification: " + notification + " - Payload: " + payload);

        if(notification == "CALENDAR_RESULT" && payload['result'].length > 0){
          // Log.log(payload['result']);
          // Log.log("Payload length: "+payload['result'].length);
          this.calendarData = payload['result'];  

          this.updateDom(1000);
        }

      },

      getDom: function() {
        var wrapper = document.createElement("div");

        for(var i = 0; i<this.calendarData.length; i++){
          var entry = this.calendarData[i];

          var entriesContainer = document.createElement("div");
          entriesContainer.classList.add("entries-container");

          // add date 
          var dateEntry = document.createElement("span");
          dateEntry.classList.add("entry-date");
          dateEntry.innerHTML = entry['date'];
          entriesContainer.appendChild(dateEntry);

          // add type 
          var typeEntry = document.createElement("span");
          typeEntry.classList.add("entry-type");
          typeEntry.innerHTML = entry['type'];
          entriesContainer.appendChild(typeEntry);

          wrapper.appendChild(entriesContainer);
        }

        return wrapper;
      },
  })