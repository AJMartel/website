class AddPaymentAmountToSubs < ActiveRecord::Migration[5.0]
  def change
    change_table(:subscriptions) do |t|
      t.decimal :pay_amount
    end
  end
end
