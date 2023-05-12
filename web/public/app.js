const API_URL = 'http://localhost:5000/api';
const MQTT_URL = 'http://localhost:5001/mqtt';


$('#add_device_floor').on('change', function() {  
  var floor = $(this).val();
  var rooms = $('#add_device_room');

  rooms.empty();

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#rem_floor').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#rem_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#device_1_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#d_1_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});



$('#devices_2_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#devices_2_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#devices_3_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#devices_3_r');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#d_1_r').on('change',function() {
  if ($('#d_1_r') != undefined && $('#device_1_f') != undefined && ('#device_1_t') != undefined) {
    const devices = $('#d_1_d');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#device_1_f').val();
    const room = $('#d_1_r').val();
    const type = $('#device_1_t').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/retrieveDev?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});



$('#devices_2_r').on('change',function() {
  if ($('#devices_2_r') != undefined && $('#devices_2_f') != undefined && ('#devices_2_t') != undefined) {
    const devices = $('#devices_2_d');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#devices_2_f').val();
    const room = $('#devices_2_r').val();
    const type = $('#devices_2_t').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/retrieveDev?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#devices_3_r').on('change',function() {
  if ($('#devices_3_r') != undefined && $('#devices_3_f') != undefined && ('#devices_3_t') != undefined) {
    const devices = $('#devices_3_d');
    console.log("yes, I am here");
    devices.empty();
    
    const floor = $('#devices_3_f').val();
    const room = $('#devices_3_r').val();
    const type = $('#devices_3_t').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/retrieveDev?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});

$('#dev_d_f').on('change', function() {
  console.log('Inside change event');
  
  var floor = $(this).val();
  var rooms = $('#dev_d_room');

  rooms.empty();
  rooms.append($('<option>', {value:"", text: "--Select--"}));

  console.log('Selected floor:', floor);

  $.ajax({
    url: `${API_URL}/getFRooms?floor=${floor}`,
    type: 'GET',
    success: function(data) {
      console.log('Retrieved rooms:', data);

      data.forEach(function(roomNumber) {
        rooms.append($('<option>', {
          value: roomNumber,
          text: roomNumber
        }));
      });

      console.log('Populated rooms:', rooms);
    },
    error: function(xhr, status, error) {
      console.log('Error:', error);
    }
  });
});


$('#dev_d_bt').on('click', function() {
  var floor = $('#dev_d_f').val();
  var room = $('#dev_d_room').val();
  var type = $('#dev_d_type').val();
  var name = $('#dev_d_dev').val();
  if ($('#dev_d_room') != undefined && $('#dev_d_f') != undefined && ('#dev_d_type') != undefined && ('#dev_d_dev') != undefined) {
    $.ajax({
      url: `${API_URL}/th?floor=${floor}&type=${type}&room=${room}&name=${name}`,
      method: 'GET',
      success: (data) => {
        console.log(data);
      
        if (data.tem.length === 0 || data.humi.length === 0) {
          $('#data_container').empty();
          $('#data_container').append(`<p>No data found.</p>`);
          return;
        }
      
        $('#data_container').empty();
        $('#data_container').append(`<h2>Device Data</h2><label>Name: ${name}</label><br><label>Type: ${type}</label><br><label>Floor: ${floor}</label><br><label>Room: ${room}</label><br><label>Gas Data: ${data.gas}</label><br><br>`);
        
        var chartOptions = {
          chart: {
            type: 'line'
          },
          title: {
            text: 'Device Data'
          },
          xAxis: {
            categories: 'DEVICE'
          },
          yAxis: {
            title: {
              text: 'Data'
            }
          },
          series: [{
            name: 'gas',
            data: data.gas
          }]
        };
        
        $(document).ready(function() {
          $('#graph').highcharts(chartOptions);
        });
      },
      error: (err) => {
        console.log('Error:', err);
        $('#data_container').empty();
        $('#data_container').append(`<p>Error: ${err.statusText}</p>`);
      }
    });
  }  
});


$('#add_device').on('click', function(){
    var name = $('#add_device_name').val();
    var floor = $('#add_device_floor').val();
    var room = $('#add_device_room').val();
    var type = $('#add_device_type').val();
    console.log(name);
    console.log(room);
    console.log(floor);
    console.log(type);
    if (type == '1') {
        $.ajax({
            url: `${API_URL}/lighting`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '2'){
        $.ajax({
            url: `${API_URL}/aircondit`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }
    else if(type == '3'){
        $.ajax({
            url: `${API_URL}/security`,
            type: "POST",
            data: {
              name: name, 
              floor: floor,
              room: room 
            },
            success: function(response) {
              console.log(response); 
            },
            error: function(xhr, status, error) {
              console.log("Error: " + error); 
            }
        });
    }

    $('#new_device_floor').val("");
});

$('#dev_d_room').on('change',function() {
  if ($('#dev_d_room') != undefined && $('#dev_d_f') != undefined && ('#dev_d_type') != undefined) {
    const devices = $('#dev_d_dev');
    devices.empty();
    
    const floor = $('#dev_d_f').val();
    const room = $('#dev_d_room').val();
    const type = $('#dev_d_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/retrieveDev?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


//REMOVE 
$('#rem_room').on('change',function() {
  if ($('#rem_floor') != undefined && $('#rem_room') != undefined && ('#remove_device_type') != undefined) {
    const devices = $('#remove_device');
    devices.empty();
    
    const floor = $('#rem_floor').val();
    const room = $('#rem_room').val();
    const type = $('#remove_device_type').val();
    console.log(floor, room, type);

    $.ajax({
      url: `${API_URL}/retrieveDev?floor=${floor}&type=${type}&room=${room}`,
      type: 'GET',
      success: function(data) {
        console.log('Retrieved devices:', data);  
        data.forEach(function(device) {
          devices.append($('<option>', {
            value: device.name,
            text: device.name
          }));
        });
  
        console.log('Populated rooms:', devices);
      },
      error: function(xhr, status, error) {
        console.log('Error:', error);
      }
    });
  }

});


$('#remove_device_button').on('click', function () {
  const type = $('#remove_device_type').val();
  const floor = $('#rem_floor').val();
  const room = $('#rem_room').val();
  const device = $('#remove_device').val();

  if (type && floor && room && device) {
    $.ajax({
      url: `${API_URL}/removeDev`,
      type: 'DELETE',
      data: { type: type, floor: floor, room: room, device: device },
      success: function () {
        console.log('Device retrieveDevd successfully');
        $('#rem_floor').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error removing device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$('#d_prefer').on('click', function () {
  const type1 = $('#device_1_t').val();
  const floor1 = $('#device_1_f').val();
  const room1 = $('#device_1_r').val();
  const device1 = $('#device_1_d').val();
  const type2 = $('#devices_2_t').val();
  const floor2 = $('#devices_2_f').val();
  const room2 = $('#devices_2_r').val();
  const device2 = $('#devices_2_d').val();
  const type3 = $('#devices_3_t').val();
  const floor3 = $('#devices_3_f').val();
  const room3 = $('#devices_3_r').val();
  const device3 = $('#devices_3_d').val();

  if (type1 && floor1 && room1 && device1 && type2 && floor2 && room2 && device2 && type3 && floor3 && room3 && device3) {
    $.ajax({
      url: `${MQTT_URL}/pref`,
      type: 'POST',
      data: { d1:{type: type1, floor: floor1, room: room1, device: device1}, d2:{type: type2, floor: floor2, room: room2, device: device2}, d3:{type: type3, floor: floor3, room: room3, device: device3}},
      success: function () {
        console.log('Pref set, successfully');
        // $('#rem_floor').val("");
  
      },
      error: function (xhr, status, error) {
        console.error('Error pref device:', error);
      }
    });
  } else {
    console.error('Missing required fields');
  }
});

$(document).ready(function() {
    const table = $('#lighting_devices');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/lighting`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $('#new_device_floor').on('change', function() {

  });

  $(document).ready(function() {
    const table = $('#security_devices');
    $.ajax({
      url: `${API_URL}/security`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });
  
  $(document).ready(function() {
    const table = $('#acondit_dev');
    console.log('yep')
    $.ajax({
      url: `${API_URL}/aircondit`,
      method: 'GET',
      success: function(data) {
        data.forEach(function(lighting) {
          const row = $('<tr></tr>');
          $('<td style="color: #ffffff;"></td>').text(lighting.name).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.room).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.floor).appendTo(row);
          $('<td style="color: #ffffff;"></td>').text(lighting.status).appendTo(row);
          table.append(row);
        });
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', errorThrown);
      }
    });
  });

// mqtt stuff

$('#send-command').on('click', function() {
  const deviceId = $('#deviceId').val();
  const command = $('#command').val();
  $.post(MQTT_URL, { deviceId, command })
  .then(response => {
  location.href = '/';
  })

});


