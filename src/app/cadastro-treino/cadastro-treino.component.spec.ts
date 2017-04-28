import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroTreinoComponent } from './cadastro-treino.component';

describe('CadastroTreinoComponent', () => {
  let component: CadastroTreinoComponent;
  let fixture: ComponentFixture<CadastroTreinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTreinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroTreinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
