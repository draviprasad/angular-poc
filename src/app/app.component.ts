import { Component } from '@angular/core';
// import * as js2xmlparser from "js2xmlparser";
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-app';
  xml = `
  <foo:Foo xmlns:foo="http://foo.com">
    <bar:Bar xmlns:bar="http://bar.com"/>
  </foo:Foo>`;

  obj = {
    'foo:Foo': {
      $: {
        'xmlns:foo': 'http://foo.com',
      },
      'bar:Bar': {
        $: {
          'xmlns:bar': 'http://bar.com',
        },
      },
    },
  };

  parsedXML: any;
  parsedJSON: any;

  parseXML() {
    // this.parsedObj = js2xmlparser.parse("person", this.obj);
    const builder = new xml2js.Builder();
    this.parsedXML = builder.buildObject(this.obj);
  }

  parseJSON() {
    xml2js.parseStringPromise(this.xml).then((data) => {
      this.parsedJSON = data;
    });
  }
}
