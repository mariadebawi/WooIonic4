import { TestBed } from '@angular/core/testing';

import { ProductCategorieService } from './product-categorie.service';

describe('ProductCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductCategorieService = TestBed.get(ProductCategorieService);
    expect(service).toBeTruthy();
  });
});
