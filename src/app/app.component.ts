import { Component, Directive, Input, ContentChildren, QueryList } from '@angular/core';
import { clearResolutionOfComponentResourcesQueue } from '@angular/core/src/metadata/resource_loading';
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Directive({
  selector: 'app-column',
})
export class AppColumnDirective {
  @Input() name;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
}

@Component({
  selector: 'app-list',
  templateUrl: './appList.component.html',
})
export class AppListComponent {
  @ContentChildren(AppColumnDirective) columns !: QueryList<AppColumnDirective>;
  inputItems = [
    {
      id: 1,
      name: "name1",
      domain: "domain1",
      country: "country2",
      owner: "owner1"
    },
    {
      id: 2,
      name: "name2",
      domain: "domain2",
      country: "country2",
      owner: "owner1"
    },
    {
      id: 3,
      name: "name3",
      domain: "domain1",
      country: "country1",
      owner: "owner2"
    },
    {
      id: 4,
      name: "name4",
      domain: "domain1",
      country: "country2",
      owner: "owner1"
    },
    {
      id: 5,
      name: "name5",
      domain: "domain2",
      country: "country1",
      owner: "owner2"
    },
    {
      id: 6,
      name: "name6",
      domain: "domain1",
      country: "country1",
      owner: "owner2"
    },
    {
      id: 7,
      name: "name7",
      domain: "domain1",
      country: "country2",
      owner: "owner2"
    },
    {
      id: 8,
      name: "name8",
      domain: "domain2",
      country: "country1",
      owner: "owner1"
    },
    {
      id: 9,
      name: "name9",
      domain: "domain2",
      country: "country2",
      owner: "owner1"
    }
  ];
  get items() {
    return this.inputItems;//.groupBy("domain");
  }
}

declare global {
  interface Array<T> {
    groupBy(prop: string): Array<T>;
  }
}

(function () {
  Array.prototype.groupBy = function (prop) {
    if (this.length > 0 && "key" in this[0] && "items" in this[0]) {
      var fnPushFirst = function (result, group) {
        result.push({ key: group.key, items: group.items.groupBy(prop) });
      }
      return reduceData.call(this, prop, fnPushFirst);
    } else {
      var fnPushFirst = function (result, item) {
        result.push({ key: item[prop], items: [item] });
      }
      return reduceData.call(this, prop, fnPushFirst);
    }
    function reduceData(prop, fnPushFirst) {
      return this.reduce(function (result, item) {
        var node = result.find(function (el) {
          return el.key === item[prop];
        });
        if (node) {
          node.items.push(item);
        } else {
          fnPushFirst(result, item);
        }
        return result;
      }, []);
    }
  };
}());