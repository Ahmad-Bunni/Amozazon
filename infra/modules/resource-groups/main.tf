resource "azurerm_resource_group" "amozazon_rg" {
  name     = "${var.project_name}-${var.environment_name}-rg"
  location = local.resource_group_location
}

