function OnUpdate(doc, meta) {
    var docID= meta.id;
    try {
    var query = INSERT INTO dst_bucket ( KEY, VALUE ) VALUES ( $docID ,'N1QL op');
    } catch (e) {
        log(e);
        }
    }
}

function OnDelete(meta) {
    var docID = meta.id;
    // Adding these extra comments to validate MB-30240
    log('Deleting document', docID);
    try{
    var query = DELETE FROM dst_bucket where meta().id = $docID;
    } catch (e) {
        log(e);
        }
    }
    // Adding these extra comments to validate MB-30240
    log('Deleting document', docID);
}
