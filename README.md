# MMM-RecyclingCalender
This a module for [Magic Mirror²](https://github.com/MichMich/MagicMirror).
This displays the recycling calendar for the Stadt Zürich, Switzerland, based on [OpenERZ API](https://github.com/metaodi/openerz). 

![Screenshot](screenshot.png)

## Installation
Clone this repository in your modules folder, and install dependencies:

```
cd ~/MagicMirror/modules 
git clone https://github.com/FatTony123/MMM-RecyclingCalendar.git
cd MMM-RecyclingCalendar
npm install 
```

## Configuration 
Go to the MagicMirror/config directory and edit the config.js file. Add the module to your modules array in your config.js.

```
{
  module: "MMM-RecyclingCalendar",
  position: "top_left",
  header: "Recycling Calendar",
  config: {
    zipCode: 8048, 
    daysToDisplay: 7,
    showStations: false,
    showExplanation: false
  }
}
```

## Module configuration 
The following options can be configured for the module. 
<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
        <td><code>zipCode</code></td>
        <td>Enter the zipCode of Zurich region you want to display 
        <br /><br />
        <strong>Default values: </strong><code>4 digit zip code</code><br />
        <strong>Possible values:</strong>
        <code>numbers</code>
        </td>
    </tr>
    <tr>
        <td><code>daysToDisplay</code></td>
        <td>Enter the number of days recycling dates should be shown. 
        <br /><br />
        <strong>Default values: </strong><code>7</code><br />
        <strong>Possible values:</strong>
        <code>numbers</code>
        </td>
    </tr>
    <tr>
        <td><code>showDate</code></td>
        <td>Select the type of how the dates should be shown.
        <br /><br />
        <strong>Default values: </strong><code>daysAndDate</code><br />
        <strong>Possible values: <br /></strong>
        <code>daysAndDate</code> - Shows recycling dates in format, e.g. Tuesday, DD.MM.YYYY<br />
        <code>inDays</code> - Shows recycling dates in days, e.g. Tuesday<br />
        <code>shortDate</code> - Shows recycling dates in format DD.MM.YYYY<br />
        </td>
    </tr>
    <tr>
        <td><code>showType</code></td>
        <td>Select the type of recycling setting to show.
        <br /><br />
        <strong>Default values: </strong><code>  </code> (empty, none)<br />
        <strong>Possible values: <br /></strong>
        <code>cardboard</code> - Shows cardboard recycling for given date period<br />
        <code>cargotram</code> - Shows cargotram recycling for given date period<br />
        <code>etram</code> - Shows etram recycling for given date period<br />
        <code>metal</code> - Shows metal recycling for given date period<br />
        <code>organic</code> - Shows organic recycling for given date period<br />
        <code>paper</code> - Shows paper recycling for given date period<br />
        <code>special</code> - Shows special recycling for given date period<br />
        <code>textile</code> - Shows textile recycling for given date period<br />
        <code>waste</code> - Shows waste recycling for given date period<br />
        </td>
    </tr>
    <tr>
        <td><code>showLocations</code></td>
        <td>Shows the location of tram recycling stations (cargotrams & etrams)  
        <br /><br />
        <strong>Default values: </strong><code>false</code><br />
        <strong>Possible values:</strong><br />
        <code>true</code> - Shows locations where given<br />
        <code>false</code> - Does not show any location details<br />
        </td>
    </tr>
     <tr>
        <td><code>showExplanation</code></td>
        <td>Shows the explanation of symbols
        <br /><br />
        <strong>Default values: </strong><code>false</code><br />
        <strong>Possible values:</strong><br />
        <code>true</code> - Shows explanations to recycling symbols<br />
        <code>false</code> - Does not show any explanation details<br />
        </td>
    </tr>
  </tbody>
</table>

## Icons
<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

## License
### The MIT License (MIT)
Copyright © 2020 FatTony123

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

The software is provided “as is”, without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the software or the use or other dealings in the software.

Note
The original script is from Jeff Clarke MMM-MyWastePickup and only for the Toronto area. Now it has become a general script, to use in all areas all over the world.

#### Note
The original script is from Jeff Clarke `MMM-MyWastePickup` and `MMM-MyGarbage`, adapted to fit an API and different appearance. 