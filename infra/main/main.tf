module "resource_groups" {
  source           = "../modules/resource-groups"
  project_name     = var.project_name
  environment_name = var.environment_name
}

module "azurerm_static_site" {
  source              = "../modules/static-sites"
  project_name        = var.project_name
  environment_name    = var.environment_name
  resource_group_name = module.resource_groups.amozazon_rg_name
}


