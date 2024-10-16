# Connect to Azure
Connect-AzAccount

# Define variables
$resourceGroupName = "example-resources"
$storageAccountName = "examplestorageacct"
$location = "West Europe"

# Create resource group if it doesn't exist
if (-not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccountParams = @{
    ResourceGroupName = $resourceGroupName
    Name              = $storageAccountName
    Location          = $location
    SkuName           = "Standard_LRS"
    Kind              = "StorageV2"
}

New-AzStorageAccount @storageAccountParams

# Output the storage account ID
$storageAccount = Get-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName
$storageAccount.Id