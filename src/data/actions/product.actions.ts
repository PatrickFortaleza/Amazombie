import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Product } from '../models/product.model'

export const ADD_PRODUCT       = '[PRODUCT] Add'

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT
  constructor(public payload: Product){}
}

export type Actions = AddProduct