class Comment < ApplicationRecord
    belongs_to :article

    belongs_to :user

    enum status: { archived: 0, deleted: 1 }

end