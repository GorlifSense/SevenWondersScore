import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesComponent } from './tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { FormsModule } from '@angular/forms';

describe('TablesComponent', () => {
  let component: TablesComponent;
  let fixture: ComponentFixture<TablesComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [
        TablesComponent,
        TableDetailComponent
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
