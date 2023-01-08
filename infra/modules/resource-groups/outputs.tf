output "amozazon_rg_name" {
  value       = azurerm_resource_group.amozazon_rg.name
  description = "The name of resource group"
}

output "amozazon_rg_location" {
  value       = azurerm_resource_group.amozazon_rg.location
  description = "The name of resource group location"
}
