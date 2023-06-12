/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun! 
    document.addEventListener('deviceready', function() {
      var toggleButton = document.getElementById('toggleButton');
      var isOn = false;

      toggleButton.addEventListener('click', function() {
        if (window.plugins && window.plugins.flashlight) {
          if (!isOn) {
            window.plugins.flashlight.switchOn();
            isOn = true;
            toggleButton.classList.add('on'); // Agregamos la clase 'on' cuando se enciende la linterna
          } else {
            window.plugins.flashlight.switchOff();
            isOn = false;
            toggleButton.classList.remove('on'); // Removemos la clase 'on' cuando se apaga la linterna
          }
        } else {
          console.log('El plugin flashlight no está disponible');
        }
      });
    }, false);
}
