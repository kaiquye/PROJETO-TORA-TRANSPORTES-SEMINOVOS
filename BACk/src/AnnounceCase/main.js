const create = require('../AnnounceCase/create-Announce')
const Delete = require('../AnnounceCase/detele-Announce')
const edit = require('../AnnounceCase/edit-Announce')
const filter = require('../AnnounceCase/filter-Announce')
const next = require('../AnnounceCase/next-Announce')
const ResizeImg = require('../AnnounceCase/Resizeimg-Announce')
const get = require('../AnnounceCase/get-Announces')
const recomed = require('../AnnounceCase/recomend-Announce')
const Oracle = require('../AnnounceCase/get-ByPlace- vehicle-Oracle')
const Update = require('../AnnounceCase/update-negociacao/index')
const CriarNovoFormulario = require('./FormCase/create-form')
const GetForm = require('./FormCase/get-form')
const deleteForm = require('./FormCase/delete-form')
module.exports = {
    create : new create(),
    Delete : new Delete(),
    edit : new edit(),
    Filter : new filter(),
    next : new next(),
    resize_imagem : new ResizeImg(),
    get : new get(),
    recomed : new recomed(),
    Oracle : new Oracle(),
    Update :  new Update(),
    createForm : new CriarNovoFormulario(),
    getForm : new GetForm(),
    deleteForm : new deleteForm()
}