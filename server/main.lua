local Proxy = module('vrp', 'lib/Proxy')
vRP = Proxy.getInterface('vRP')

RegisterServerEvent("d7y_destinyHUD:get")
AddEventHandler("d7y_destinyHUD:get", function()
    local user_id = vRP.getUserId({ source })
    if user_id ~= nil then
        local data = {
            hunger = vRP.getHunger({ user_id }),
            thirst = vRP.getThirst({ user_id }),
         }
        TriggerClientEvent('d7y_destinyHUD:set:hunger:thirst', source, data)
    end
end)
