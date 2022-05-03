import { BigInt } from "@graphprotocol/graph-ts";
import {
  NftMarketplace,
  ItemBought,
  ItemCanceled,
  ItemListed,
} from "../generated/NftMarketplace/NftMarketplace";
import { ExampleEntity } from "../generated/schema";

export function handleItemBought(event: ItemBought): void {}

export function handleItemCanceled(event: ItemCanceled): void {}

export function handleItemListed(event: ItemListed): void {}
