import { Component } from '@angular/core';

@Component({
  selector: 'bgr-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  // TODO pick data from http://bgr.gorlifsense.com/api/v1/tables
  // TODO remove mocked data
  /* tslint:disable */
  tables: any = [
    {
      "_id": "575c5cc9f418f427377fdfab",
      "game": {
        "players": [
          {
            "name": "Andrew",
            "city": {
              "name": "gizah",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "12",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "Glib",
            "city": {
              "name": "ephesos",
              "side": "b"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "12",
              "culture": "0",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "Serega",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "0",
              "trade": "12",
              "guild": "0",
              "science": "0"
            }
          }
        ]
      },
      "description": "Some description",
      "created_at": "2016-06-11T18:47:37.536Z",
      "updated_at": "2016-06-11T18:47:37.536Z"
    },
    {
      "_id": "575ddf38ec6bb80300ed6822",
      "game": {
        "players": [
          {
            "name": "UUUU",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "2",
              "gold": "3",
              "wonder": "4",
              "culture": "5",
              "trade": "1",
              "guild": "1",
              "science": "0"
            }
          },
          {
            "name": "656565",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "-6",
              "gold": "0",
              "wonder": "0",
              "culture": "0",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "iuoiuiou",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "10",
              "gold": "20",
              "wonder": "30",
              "culture": "5",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "jhkjhjk",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "7",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          }
        ]
      },
      "description": "JJJJJJJJ Test",
      "created_at": "2016-06-12T22:16:24.045Z",
      "updated_at": "2016-06-12T22:16:24.045Z"
    },
    {
      "_id": "575c19bc32618a3518277947",
      "game": {
        "players": [
          {
            "name": "Big Clergy",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "0",
              "trade": "0",
              "guild": "9",
              "science": "0"
            }
          },
          {
            "name": "Red Support",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "9",
              "trade": "0",
              "guild": "0",
              "science": "9"
            }
          },
          {
            "name": "Additional Newbie",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "9",
              "gold": "0",
              "wonder": "0",
              "culture": "9",
              "trade": "9",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "Purple Wolf",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "2",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          }
        ]
      },
      "description": "Very first game for testiung",
      "__v": 0
    },
    {
      "_id": "5794a1b86855330003519132",
      "name": "New table",
      "game": {
        "players": [
          {
            "name": "Avanahche",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "1",
              "gold": "1",
              "wonder": "1",
              "culture": "1",
              "trade": "1",
              "guild": "1",
              "science": "1"
            }
          }
        ]
      },
      "description": "Some big red game",
      "created_at": "2016-07-24T11:08:40.402Z",
      "updated_at": "2016-07-24T11:08:40.402Z"
    },
    {
      "_id": "579a6d899a704800032c433d",
      "description": "This was created with POST request",
      "game": {
        "title": "7 Wonders",
        "players": [
          {
            "nickname": "GreenFalcon",
            "city": {
              "name": "Gizah",
              "side": "B"
            },
            "situation": {
              "military": 0,
              "gold": 8,
              "wonder": 3,
              "culture": 0,
              "trade": 6,
              "guild": 4,
              "science": 36
            }
          },
          {
            "nickname": "Aragorn",
            "city": {
              "name": "Babylon",
              "side": "B"
            },
            "situation": {
              "military": 6,
              "gold": 0,
              "wonder": 0,
              "culture": 18,
              "trade": 5,
              "guild": 9,
              "science": 2
            }
          }
        ]
      },
      "created_at": "2016-07-28T20:39:37.211Z",
      "updated_at": "2016-07-28T20:39:37.211Z"
    },
    {
      "_id": "59591cad8c689e0004ff698a",
      "name": "New table",
      "game": {
        "players": [
          {
            "name": "Katya",
            "city": {
              "name": "ephesos",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "0",
              "trade": "0",
              "guild": "0",
              "science": "1"
            }
          }
        ]
      },
      "description": "Hello Katya",
      "created_at": "2017-07-02T16:17:49.845Z",
      "updated_at": "2017-07-02T16:17:49.845Z"
    },
    {
      "_id": "595d35634ca29b0004646a12",
      "name": "New table",
      "game": {
        "players": [
          {
            "name": "Olga",
            "city": {
              "name": "alexandria",
              "side": "a"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "2",
              "culture": "0",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          },
          {
            "name": "Lina",
            "city": {
              "name": "gizah",
              "side": "b"
            },
            "situation": {
              "military": "0",
              "gold": "0",
              "wonder": "0",
              "culture": "3",
              "trade": "0",
              "guild": "0",
              "science": "0"
            }
          }
        ]
      },
      "description": "Good game was played",
      "created_at": "2017-07-05T18:52:19.392Z",
      "updated_at": "2017-07-05T18:52:19.392Z"
    }
  ];
  /* tslint:enable */


  static getColor() {
    return 'green';
  }
}
