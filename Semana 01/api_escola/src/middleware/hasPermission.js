const jwt = require("jsonwebtoken")
const PermissionRole = require("../models/PermissionRole")
const Permission = require("../models/Permission")

function hasPermission(permissions){
    return async (request, response, next) => {
        if(!request.headers.authorization){
            return response.status(401).send("Token não fornecido!")
        }

        const token = request.headers.authorization

        const decoded = jwt.verify(token, process.env.SECRET_JWT)
        request.payload = decoded

        try {
           
            const roles = await PermissionRole.findAll({
                where: {
                    roleId: request.payload.roles.map((role) => role.id)
                },
                attributes: ['permissionId'],
                include: [{model: Permission}]
            })

            const existPermission = roles.some((role) => {
                const hasPermission = role.permissions.some((permissao) => {
                    return permissions.includes(permissao.description)
                })

                return hasPermission
            })

            if(!existPermission){
                return response.status(401).send("Você não tem permissão para acesar!")
            }

            next()
        } catch {

        }
    }
}