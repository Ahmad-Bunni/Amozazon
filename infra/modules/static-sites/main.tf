resource "azurerm_static_site" "amozazon_static_site" {
  name                = "${var.project_name}-${var.environment_name}-site"
  resource_group_name = var.resource_group_name
  location            = local.resource_group_location
}

