import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { TablesComponent } from './tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { TableItemComponent } from './table-item/table-item.component';
import { HttpClientModule } from '@angular/common/http';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [
        TablesComponent,
        TableDetailComponent,
        TableItemComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
