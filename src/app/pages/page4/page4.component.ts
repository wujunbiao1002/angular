import {
  AfterViewInit,
  Compiler,
  Component,
  ComponentRef,
  Injector,
  NgModule,
  NgModuleRef,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit, AfterViewInit {

  constructor(private compiler: Compiler,
              private injector: Injector,
              private moduleRef: NgModuleRef<any>,
  ) {
  }

  html = '<ul nz-menu nzMode="horizontal">\n' +
    '  <li nz-menu-item>首页</li>\n' +
    '  <li nz-menu-item>业务感知</li>\n' +
    '  <li nz-menu-item>客户感知</li>\n' +
    '  <li nz-submenu nzTitle="统计报表">\n' +
    '    <ul>\n' +
    '      <li nz-submenu nzTitle="5G SA统计报表">\n' +
    '        <ul>\n' +
    '          <li nz-submenu nzTitle="控制面指标报表">\n' +
    '            <ul>\n' +
    '              <li nz-menu-item>接入性指标分析报表</li>\n' +
    '              <li nz-menu-item>移动性指标分析报表</li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '          <li nz-submenu nzTitle="用户面指标报表">\n' +
    '            <ul>\n' +
    '              <li nz-menu-item>HTTP分析指标报表</li>\n' +
    '              <li nz-menu-item>TCP指标分析报表</li>\n' +
    '              <li nz-menu-item>多维用户数分析报表</li>\n' +
    '            </ul>\n' +
    '          </li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li nz-menu-item>4G统计报表</li>\n' +
    '      <li nz-menu-item>集团信令考核</li>\n' +
    '    </ul>\n' +
    '  </li>\n' +
    '  <li nz-menu-item>专题分析</li>\n' +
    '  <li nz-menu-item>物联网分析</li>\n' +
    '  <li nz-menu-item>详单查询</li>\n' +
    '  <li nz-submenu nzTitle="系统管理">\n' +
    '    <ul>\n' +
    '      <li nz-submenu nzTitle="系统管理">\n' +
    '        <ul>\n' +
    '          <li nz-menu-item>租户管理</li>\n' +
    '          <li nz-menu-item>应用管理</li>\n' +
    '          <li nz-menu-item>用户管理</li>\n' +
    '          <li nz-menu-item>组管理</li>\n' +
    '          <li nz-menu-item>角色管理</li>\n' +
    '          <li nz-menu-item>系统日志</li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '      <li nz-submenu nzTitle="开发选项">\n' +
    '        <ul>\n' +
    '          <li nz-menu-item>权限管理</li>\n' +
    '          <li nz-menu-item>资源管理</li>\n' +
    '          <li nz-menu-item>资源类型配置</li>\n' +
    '        </ul>\n' +
    '      </li>\n' +
    '    </ul>\n' +
    '  </li>\n' +
    '</ul>';
  menus = [{name: '首页', url: '/index/**', imgUrl: null, isNav: true, isLeaf: true, location: 0, parentNode: null}, {
    name: '业务感知',
    url: '/business/**',
    imgUrl: null,
    isNav: true,
    isLeaf: false,
    location: 1,
    parentNode: null
  }, {name: '客户感知', url: '/customer/**', imgUrl: null, isNav: true, isLeaf: false, location: 2, parentNode: null}, {
    name: '统计报表', url: '/statistical', imgUrl: '/test.png', isNav: true, isLeaf: false, location: 3, parentNode: 'null', children: [{
      name: '5G SA统计报表',
      url: '/statistical/5GSA',
      imgUrl: '/statistical/icon-5G',
      isNav: false,
      isLeaf: false,
      location: 0,
      parentNode: '/statistical',
      children: [{
        name: '控制面指标报表',
        url: '/statistical/5GSA/control-surface',
        imgUrl: null,
        isNav: false,
        isLeaf: false,
        location: 0,
        parentNode: '/statistical/5GSA',
        children: [{
          name: '接入性指标分析报表',
          url: '/statistical/5GSA/control-surface/access',
          imgUrl: null,
          isNav: false,
          isLeaf: true,
          location: 0,
          parentNode: '/statistical/5GSA/control-surface'
        }, {
          name: '移动性指标分析报表',
          url: '/statistical/5GSA/control-surface/move',
          imgUrl: null,
          isNav: false,
          isLeaf: true,
          location: 1,
          parentNode: '/statistical/5GSA/control-surface'
        }]
      }, {
        name: '用户面指标报表',
        url: '/statistical/5GSA/user-surface',
        imgUrl: null,
        isNav: false,
        isLeaf: false,
        location: 1,
        parentNode: '/statistical/5GSA',
        children: [{
          name: 'HTTP分析指标报表',
          url: '/statistical/5GSA/user-surface/http',
          imgUrl: null,
          isNav: false,
          isLeaf: true,
          location: 0,
          parentNode: '/statistical/5GSA/user-surface'
        }, {
          name: 'TCP指标分析报表',
          url: '/statistical/5GSA/user-surface/tcp',
          imgUrl: null,
          isNav: false,
          isLeaf: true,
          location: 1,
          parentNode: '/statistical/5GSA/user-surface'
        }, {
          name: '多维用户数分析报表',
          url: '/statistical/5GSA/user-surface/multidimensional',
          imgUrl: '',
          isNav: false,
          isLeaf: true,
          location: 2,
          parentNode: '/statistical/5GSA/user-surface'
        }]
      }]
    }, {
      name: '4G统计报表',
      url: '/statistical/4G',
      imgUrl: '/statistical/icon-4G',
      isNav: false,
      isLeaf: true,
      location: 1,
      parentNode: '/statistical'
    }, {
      name: '集团信令考核',
      url: '/statistical/group-assessment',
      imgUrl: '/statistical/icon-signaling',
      isNav: false,
      isLeaf: true,
      location: 2,
      parentNode: '/statistical'
    }]
  }, {name: '专题分析', url: '/zhuanti/**', imgUrl: null, isNav: true, isLeaf: false, location: 4, parentNode: null}, {
    name: '物联网分析',
    url: '/wulianwang/**',
    imgUrl: null,
    isNav: true,
    isLeaf: false,
    location: 5,
    parentNode: null
  }, {name: '详单查询', url: '/orders/**', imgUrl: null, isNav: true, isLeaf: false, location: 6, parentNode: 'null'}, {
    name: '系统管理',
    url: '/system',
    imgUrl: null,
    isNav: true,
    isLeaf: false,
    location: 7,
    parentNode: null,
    children: [{
      name: '系统管理',
      url: '/system/management',
      imgUrl: null,
      isNav: false,
      isLeaf: false,
      location: 0,
      parentNode: '/system',
      children: [{
        name: '租户管理',
        url: '/system/management/tenant',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 0,
        parentNode: '/system/management'
      }, {
        name: '应用管理',
        url: '/system/management/application',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 1,
        parentNode: '/system/management'
      }, {
        name: '用户管理',
        url: '/system/management/users',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 2,
        parentNode: '/system/management'
      }, {
        name: '组管理',
        url: '/system/management/group',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 3,
        parentNode: '/system/management'
      }, {
        name: '角色管理',
        url: '/system/management/role',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 4,
        parentNode: '/system/management'
      }, {
        name: '系统日志',
        url: '/system/management/log',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 5,
        parentNode: '/system/management'
      }]
    }, {
      name: '开发选项',
      url: '/system/develop',
      imgUrl: null,
      isNav: false,
      isLeaf: false,
      location: 1,
      parentNode: '/system',
      children: [{
        name: '权限管理',
        url: '/system/develop/permission',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 0,
        parentNode: '/system/develop'
      }, {
        name: '资源管理',
        url: '/system/develop/resources',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 1,
        parentNode: '/system/develop'
      }, {
        name: '资源类型配置',
        url: '/system/develop/resource-type',
        imgUrl: null,
        isNav: false,
        isLeaf: true,
        location: 2,
        parentNode: '/system/develop'
      }]
    }]
  }];
  @ViewChild('vc', {read: ViewContainerRef}) vc: ViewContainerRef;
  private cmpRef: ComponentRef<any>;

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {

    this.createComponentFromRaw(`<div style="border: 1px solid blue; margin: 5px; padding: 5px">
    <div>Start Raw Component ... </div>
    <h5>Binding value: {{data.some}}</h5>
    <span *ngIf="getX() === 'X'">Use *ngIf: {{getX()}} </span>
    </div>`);
  }

  createComponentFromRaw(template: string): void {
    const styles = [];

    // tslint:disable-next-line:typedef
    function TmpCmpConstructor() {
      // 需要给当前创建的模版传递的数据
      this.data = {some: '222'};
      // 需要给当前创建的模版传递的方法
      this.getX = () => 'X';
    }

    const tmpCmp = Component({template, styles})(new TmpCmpConstructor().constructor);

    // Now, also create a dynamic module.
    const tmpModule = NgModule({
      imports: [CommonModule],
      declarations: [tmpCmp],
      // 如果这个html模版中用到了其他组件  需要把这个组件也传递进去
      // declarations: [tmpCmp, HelloComponent],
      // providers: [] - e.g. if your dynamic component needs any service, provide it here.
    })(class {
    });

    // Now compile this module and component, and inject it into that #vc in your current component template.
    this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
      .then((factories) => {
        const f = factories.componentFactories[0];
        this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
        this.cmpRef.instance.name = 'my-dynamic-component';
        this.vc.insert(this.cmpRef.hostView);
      });
  }
}
