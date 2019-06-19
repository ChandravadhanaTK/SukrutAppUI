import React from "react";
import { Geofence } from "@ionic-native/geofence/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { SMS } from "@ionic-native/sms/ngx";
import { Platforms } from "@ionic/core";

class Geo {
  radius: number = 100;
  error: any;
  success: any;

  constructor(
    private geofence: Geofence,
    private geolocaion: Geolocation,
    private sms: SMS
  ) {
    geofence.initialize().then(
      // resolved promise does not return a value
      () => console.log("Geofence Plugin Ready"),
      err => console.log(err)
    );
  }
  setGeofence(value: number) {
    this.geolocaion
      .getCurrentPosition({
        enableHighAccuracy: true
      })
      .then(resp => {
        var longitude = resp.coords.longitude;
        var latitude = resp.coords.latitude;
        var radius = value;

        let fence = {
          id: "mygeofenceId1",
          latitude: latitude,
          longitude: longitude,
          radius: radius,
          transitionType: 2
        };

        this.geofence
          .addOrUpdate(fence)
          .then(
            () => (this.success = true),
            err => (this.error = "Failed to add or update the fence")
          );

        this.geofence.onTransitionReceived().subscribe(resp => {
          this.sms.send("9945489540", "left the fence");
        });
      })
      .catch(error => {
        this.error = error;
      });
  }
}
export default Geo;
