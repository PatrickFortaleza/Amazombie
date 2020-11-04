import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Product } from '../models/product.model'

export const ADD_PRODUCT       = '[PRODUCT] Add'
export const DEC_PRODUCT       = '[PRODUCT] Decrease'
export const DEL_PRODUCT       = '[PRODUCT] Delete'

export class AddProduct implements Action {
  readonly type = ADD_PRODUCT
  constructor(public payload: Product){}
}


export class DecProduct implements Action {
  readonly type = DEC_PRODUCT
  constructor(public payload: number){}
}

export class DelProduct implements Action {
  readonly type = DEL_PRODUCT
  constructor(public payload: number){}
}


export type Actions = AddProduct | DecProduct | DelProduct
